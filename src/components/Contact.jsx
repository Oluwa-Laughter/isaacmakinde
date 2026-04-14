import { ImWhatsapp } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <IoMdMail />,
    link: "mailto:ismakinde@gmail.com",
    text: "ismakinde@gmail.com",
    label: "Email",
  },
  {
    icon: <FaPhoneVolume />,
    link: "tel:+2348053744603",
    text: "08053744603",
    label: "Phone",
  },
  {
    icon: <ImWhatsapp />,
    link: "https://wa.me/2348053744603",
    text: "+234 805 374 4603",
    label: "WhatsApp",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="border-b border-white/10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="mt-3 text-4xl font-bold text-white">
          Let&apos;s Connect
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-neutral-400 leading-relaxed mb-12"
        >
          I can help you create, improve or build the product experience for
          your new or existing products. Feel free to get in touch with me.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300 min-w-[160px]"
            >
              <span className="text-2xl text-cyan-400">{contact.icon}</span>
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                {contact.label}
              </span>
              <span className="text-sm text-neutral-300 font-medium text-center">
                {contact.text}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
