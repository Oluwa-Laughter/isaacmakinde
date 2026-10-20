/**
 * Portfolio contact endpoint.
 *
 * Set RESEND_API_KEY and RESEND_FROM_EMAIL in Vercel to use Resend.
 * No API key or secret is exposed in the Vite/React bundle.
 */
const inquiries = new Set([
  "Frontend opportunity",
  "Project collaboration",
  "Freelance work",
  "Just saying hello",
]);

const json = (payload, status = 200) =>
  Response.json(payload, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });

const configured = () =>
  Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL);

export function GET() {
  return json({ provider: "resend", configured: configured() });
}

export async function POST(request) {
  if (!configured()) {
    return json({
      success: false,
      code: "EMAIL_NOT_CONFIGURED",
      error: "Email delivery is not yet configured.",
    }, 503);
  }

  // Prevent browsers on unrelated websites from invoking this endpoint.
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return json({ success: false, error: "Origin not allowed." }, 403);
      }
    } catch {
      return json({ success: false, error: "Invalid origin." }, 403);
    }
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json({ success: false, error: "Send JSON data." }, 415);
  }

  if (Number(request.headers.get("content-length") || 0) > 16000) {
    return json({ success: false, error: "Message is too large." }, 413);
  }

  let input;
  try {
    const body = await request.text();
    if (body.length > 16000) return json({ success: false, error: "Message is too large." }, 413);
    input = JSON.parse(body);
  } catch {
    return json({ success: false, error: "Invalid message payload." }, 400);
  }

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return json({ success: false, error: "Invalid message payload." }, 400);
  }

  // Honeypot. Do not deliver automated submissions.
  if (input.website) return json({ success: true });

  const clean = (value) => typeof value === "string" ? value.trim() : "";
  const name = clean(input.name);
  const email = clean(input.email);
  const inquiry = clean(input.inquiry);
  const message = clean(input.message);

  if (
    name.length < 2 || name.length > 100 ||
    email.length > 160 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !inquiries.has(inquiry) ||
    message.length < 10 || message.length > 3000
  ) {
    return json({ success: false, error: "Please check your contact details and message." }, 400);
  }

  const to = process.env.CONTACT_TO_EMAIL || "ismakinde@gmail.com";
  const subject = "Portfolio inquiry: " + inquiry;
  const content = [
    "New message from your portfolio",
    "",
    "Name: " + name,
    "Email: " + email,
    "Inquiry: " + inquiry,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.RESEND_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [to],
        reply_to: email,
        subject,
        text: content,
      }),
      signal: AbortSignal.timeout(9000),
    });

    if (!response.ok) {
      // Avoid echoing provider errors or account configuration details publicly.
      console.error("Resend rejected portfolio email:", response.status);
      return json({ success: false, error: "Your message could not be sent. Please email me directly." }, 502);
    }

    const result = await response.json().catch(() => ({}));
    if (!result.id) {
      console.error("Resend did not return a message ID.");
      return json({ success: false, error: "The email provider did not confirm your message." }, 502);
    }

    return json({ success: true, message: "Message accepted for delivery." }, 200);
  } catch (error) {
    console.error("Portfolio email request failed:", error?.name || "unknown error");
    return json({ success: false, error: "Email service is temporarily unavailable. Please email me directly." }, 502);
  }
}
