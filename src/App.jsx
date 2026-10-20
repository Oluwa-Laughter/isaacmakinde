import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  FiArrowDown, FiArrowRight, FiArrowUpRight, FiCheck, FiCopy,
  FiGithub, FiLinkedin, FiMail, FiMenu, FiMoon, FiSun, FiX
} from "react-icons/fi";
import portrait from "./assets/isaac-hero.png";

const email = "ismakinde@gmail.com";
const socials = [
  { name: "GitHub", url: "https://github.com/Oluwa-Laughter", icon: FiGithub },
  { name: "LinkedIn", url: "https://linkedin.com/in/isaacmakinde", icon: FiLinkedin },
  { name: "X / Twitter", url: "https://x.com/isaacmakinde_", icon: FiArrowUpRight },
];
const projects = [
  {
    number: "01", title: "Lumina", type: "Clean energy platform", year: "2026",
    description: "A more intuitive path to clean energy, from appliance assessment and system sizing to financing and installation workflows.",
    stack: ["Next.js", "TypeScript", "React Query", "Zod"],
    live: "https://luminavs.vercel.app/", source: null, visual: "lumina"
  },
  {
    number: "02", title: "Komtal", type: "Business & talent platform", year: "2025",
    description: "A multi-page experience for talent acquisition, business consulting and company reviews, backed by an editable headless CMS.",
    stack: ["Next.js", "React", "Sanity", "Framer Motion"],
    live: "https://komtal.com.ng", source: null, visual: "komtal"
  },
  {
    number: "03", title: "Kanban", type: "Full-stack task manager", year: "2026",
    description: "Boards, tasks and accessible drag-and-drop interactions, with account-based persistence and a carefully considered interface.",
    stack: ["Next.js 16", "TypeScript", "Supabase", "dnd-kit"],
    live: "https://kanban-task-management-umber.vercel.app",
    source: "https://github.com/Oluwa-Laughter/kanban-task-management", visual: "kanban"
  },
  {
    number: "04", title: "Klimate", type: "Weather application", year: "2026",
    description: "A responsive weather companion with city search, forecast charts, cached API data and a polished dark mode.",
    stack: ["React", "TypeScript", "TanStack Query", "Recharts"],
    live: "https://klimate-iota.vercel.app",
    source: "https://github.com/Oluwa-Laughter/klimate", visual: "klimate"
  },
  {
    number: "05", title: "iM-Store", type: "E-commerce experience", year: "2024",
    description: "An e-commerce storefront with discovery, filtering, authentication and cart management across a responsive shopping flow.",
    stack: ["React", "Redux", "Tailwind CSS", "Firebase"],
    live: "https://imstore.vercel.app",
    source: "https://github.com/Oluwa-Laughter/iM-store", visual: "store"
  }
];
const experience = [
  {
    company: "Lumina", role: "Frontend Engineer", time: "May 2026 — Present",
    summary: "Building the customer and installer experiences for a Nigerian clean-energy platform, including onboarding, energy assessment, system sizing and financing workflows.",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Zod"]
  },
  {
    company: "Komtal Business Consult", role: "Frontend Engineer", time: "Aug 2025 — Present",
    summary: "Built the business platform from the ground up, migrated it to Next.js 15 and React 19, and integrated Sanity for stakeholder-managed content.",
    tags: ["Next.js", "React", "Sanity", "Framer Motion"]
  },
  {
    company: "Independent / Freelance", role: "Frontend Developer", time: "Sep 2023 — Present",
    summary: "Shipped 10+ responsive projects, integrating third-party APIs and backend services while improving interface quality, accessibility and performance.",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST APIs"]
  }
];
const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion",
  "TanStack Query", "Redux Toolkit", "shadcn/ui", "Radix UI", "Sanity CMS",
  "Supabase", "Firebase", "REST APIs", "Figma", "Git & GitHub", "Vercel", "Zod"
];
const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectVisual({ visual, title }) {
  return (
    <div className={"project-visual visual-" + visual} aria-label={"Stylized visual for " + title} role="img">
      <div className="visual-top"><span>IM — SELECTED WORK</span><span>↗</span></div>
      {visual === "lumina" && (
        <div className="solar-art">
          <div className="solar-orbit orbit-one" /><div className="solar-orbit orbit-two" />
          <div className="solar-sun" /><span className="solar-caption">ENERGY, REIMAGINED.</span>
        </div>
      )}
      {visual === "komtal" && (
        <div className="komtal-art">
          <span className="komtal-mark">K.</span><div className="komtal-title">Better people.<br />Better business.</div>
          <div className="komtal-stripe"><span>GROW</span><span>CONNECT</span><span>BUILD</span></div>
        </div>
      )}
      {visual === "kanban" && (
        <div className="kanban-art">
          {["To do", "In progress", "Done"].map((column, i) => (
            <div className="kanban-column" key={column}>
              <span>{column}<b>{i === 0 ? "03" : "02"}</b></span>
              <div className="kanban-task"><i /><i /></div><div className="kanban-task short"><i /><i /></div>
              {i === 0 && <div className="kanban-task mini"><i /></div>}
            </div>
          ))}
        </div>
      )}
      {visual === "klimate" && (
        <div className="weather-art">
          <span className="weather-city">FORECAST / YOUR CITY</span>
          <span className="weather-temp">24<span>°</span></span>
          <div className="weather-wave"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <span className="weather-foot">A CLEARER OUTLOOK →</span>
        </div>
      )}
      {visual === "store" && (
        <div className="store-art">
          <div className="store-object one" /><div className="store-object two" />
          <div className="store-caption">EVERYDAY<br />ESSENTIALS<span>iM—STORE</span></div>
        </div>
      )}
      <div className="visual-bottom"><span>{title.toUpperCase()}</span><span>PROJECT / 2026</span></div>
    </div>
  );
}

function Header({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#top" className="wordmark" aria-label="Isaac Makinde — home">im<span>.</span></a>
        <nav className="desktop-links" aria-label="Main navigation">
          {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-button" type="button" onClick={onThemeToggle}
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            title={theme === "light" ? "Dark mode" : "Light mode"}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <a href="mailto:ismakinde@gmail.com?subject=Let%27s%20work%20together"
            className="nav-contact">Let&apos;s talk <FiArrowUpRight /></a>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
            aria-controls="mobile-navigation">{open ? <FiX /> : <FiMenu />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.nav id="mobile-navigation" className="mobile-links" aria-label="Mobile navigation"
          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}>
          {navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<FiArrowUpRight /></a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="hero shell">
      <div className="hero-content">
        <Reveal><div className="eyebrow"><span className="status-dot" /> ISAAC MAKINDE <span className="eyebrow-rule" /> FRONTEND ENGINEER</div></Reveal>
        <Reveal delay={0.08}><h1>Thoughtful<br />interfaces.<br /><em>Real impact.</em></h1></Reveal>
        <Reveal delay={0.16}>
          <p className="hero-lede">I turn complex ideas into intuitive, accessible digital experiences — crafted with React, Next.js, TypeScript and a close eye for the details.</p>
        </Reveal>
        <Reveal delay={0.23}><div className="hero-buttons">
          <a className="button button-primary" href="#work">Explore my work <FiArrowUpRight /></a>
          <a className="button button-outline" href="/resume.html" target="_blank" rel="noreferrer">View résumé <FiArrowUpRight /></a>
        </div></Reveal>
        <Reveal delay={0.3}><div className="hero-bottom"><span>BASED IN LAGOS, NIGERIA</span><a href="#work">SCROLL TO EXPLORE <FiArrowDown /></a></div></Reveal>
      </div>
      <Reveal className="portrait-wrap" delay={0.24}>
        <div className="portrait-frame">
          <div className="portrait-graphic">IM<span>®</span></div>
          <img src={portrait} alt="Portrait of Isaac Makinde" className="portrait-photo" />
          <div className="portrait-line"><span>DESIGN-MINDED</span><span>CODE-DRIVEN</span></div>
        </div>
        <div className="portrait-under"><span>01 / GET TO KNOW ME</span><span>FRONTEND DEVELOPMENT · 2026</span></div>
      </Reveal>
      {!reduce && <motion.div className="hero-accent-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 1.1 }} />}
    </section>
  );
}

function SectionHeader({ number, label, heading, description }) {
  return (
    <Reveal className="section-heading">
      <span className="section-kicker"><span>{number}</span> {label}</span>
      <div className="section-heading-main"><h2>{heading}</h2>{description && <p>{description}</p>}</div>
    </Reveal>
  );
}

function Work() {
  return (
    <section id="work" className="section shell work-section">
      <SectionHeader number="01" label="SELECTED WORK" heading={<>Some things<br /><em>I&apos;ve built.</em></>}
        description="A selection of digital products shaped by usability, performance and an obsession with getting the little things right." />
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal className={"project-card " + (index === 0 ? "project-featured" : "")} key={project.title} delay={index % 2 === 0 ? 0 : 0.09}>
            <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.23 }} className="project-article">
              <a className="project-image-link" href={project.live} target="_blank" rel="noreferrer"
                aria-label={"Visit " + project.title + " live website"}>
                <ProjectVisual visual={project.visual} title={project.title} />
                <span className="project-image-arrow"><FiArrowUpRight /></span>
              </a>
              <div className="project-info">
                <div className="project-label"><span>{project.number} / {project.type}</span><span>{project.year}</span></div>
                <div className="project-title-row"><h3>{project.title}</h3><div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label={"Visit " + project.title}><FiArrowUpRight /></a>
                  {project.source && <a href={project.source} target="_blank" rel="noreferrer" aria-label={project.title + " GitHub repository"}><FiGithub /></a>}
                </div></div>
                <p>{project.description}</p>
                <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <Reveal className="work-more"><a href="https://github.com/Oluwa-Laughter?tab=repositories" target="_blank" rel="noreferrer">More on GitHub <FiArrowUpRight /></a></Reveal>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-panel">
      <div className="shell about-grid">
        <Reveal><span className="section-kicker"><span>02</span> A LITTLE ABOUT ME</span>
          <h2 className="about-big">Curiosity<br />meets <em>craft.</em></h2>
          <div className="about-symbol" aria-hidden="true">✳</div>
        </Reveal>
        <Reveal delay={0.1} className="about-copy">
          <p>I&apos;m Isaac, a frontend-focused software engineer who enjoys making the complex feel simple. I care about the intersection of clean engineering, usable design and the small interactions that make a product memorable.</p>
          <p>I&apos;ve worked across clean energy, consulting, commerce and productivity — building responsive experiences, connecting them to real data and getting them ready for production.</p>
          <p>My background in Mathematics at the University of Lagos informs how I approach problems: with structure, curiosity and a bias for clarity.</p>
          <div className="about-meta"><span>10+<small>PROJECTS SHIPPED</small></span><span>2023<small>BUILDING SINCE</small></span><span>LAGOS<small>BASED IN NIGERIA</small></span></div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section shell experience-section">
      <SectionHeader number="03" label="THE JOURNEY" heading={<>Where I&apos;ve<br /><em>made things happen.</em></>} />
      <div className="experience-list">
        {experience.map((job, index) => (
          <Reveal key={job.company} delay={index * 0.06} className="experience-item">
            <span className="experience-time">{job.time}</span>
            <div className="experience-detail"><h3>{job.role}</h3><span className="experience-company">{job.company}</span><p>{job.summary}</p>
              <div className="experience-tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
            <span className="experience-index">0{index + 1}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="toolkit-section shell">
      <Reveal><div className="toolkit-head"><span className="section-kicker"><span>04</span> MY TOOLKIT</span><p>The tools I reach for to build<br />better experiences.</p></div></Reveal>
      <Reveal><div className="skill-cloud">{skills.map((skill, index) => <span className={index < 6 ? "skill-pill skill-main" : "skill-pill"} key={skill}>{skill}</span>)}</div></Reveal>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = "mailto:" + email;
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <Reveal><div className="contact-top"><span className="section-kicker"><span>05</span> GET IN TOUCH</span><span>HAVE A PROJECT IN MIND?</span></div></Reveal>
        <Reveal delay={0.08}><h2>Let&apos;s make<br /><em>something good.</em></h2></Reveal>
        <Reveal delay={0.14}><p>Have an opportunity, an idea, or just want to say hello? My inbox is open. I&apos;d love to hear what you&apos;re working on.</p></Reveal>
        <Reveal delay={0.2}><div className="contact-actions">
          <a className="contact-main-link" href="mailto:ismakinde@gmail.com?subject=Hello%20Isaac%20%E2%80%94%20Let%27s%20connect">Start a conversation <FiArrowUpRight /></a>
          <button className="copy-email" type="button" onClick={copyEmail} aria-label="Copy email address">
            {copied ? <FiCheck /> : <FiCopy />} {copied ? "Email copied" : email}
          </button>
        </div></Reveal>
        <Reveal delay={0.24}><div className="contact-socials">
          {socials.map(({ name, url, icon: Icon }) => <a key={name} href={url} target="_blank" rel="noreferrer">{<Icon />} {name} <FiArrowUpRight /></a>)}
          <a href="https://wa.me/2348053744603" target="_blank" rel="noreferrer"><FiMail /> WhatsApp <FiArrowUpRight /></a>
        </div></Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light"; }
    catch { return "light"; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { window.localStorage.setItem("portfolio-theme", theme); } catch { /* storage disabled */ }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#work">Skip to main content</a>
      <Header theme={theme} onThemeToggle={() => setTheme(current => current === "light" ? "dark" : "light")} />
      <main><Hero /><Work /><About /><Experience /><Toolkit /><Contact /></main>
      <footer className="site-footer shell">
        <a href="#top" className="footer-logo" aria-label="Back to top">im.</a>
        <span>© {new Date().getFullYear()} ISAAC MAKINDE · BUILT WITH INTENTION.</span>
        <a href="#top">BACK TO TOP <FiArrowRight /></a>
      </footer>
    </>
  );
}
