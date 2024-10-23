import { ImWhatsapp } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <IoMdMail />,
    link: "mailto:ismakinde@gmail.com",
    text: "ismakinde@gmail.com",
  },
  {
    icon: <FaPhoneVolume />,
    link: "tel:+2348053744603",
    text: "08053744603",
  },
  {
    icon: <ImWhatsapp />,
    link: "https://wa.me/2348053744603",
    text: "+234 805 374 4603",
  },
];

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold uppercase"
      >
        Contact
      </motion.h2>
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center text-md"
      >
        I can help you create, improve or build the product experience for your
        new or existing products. Feel free to get in touch with me.
      </motion.h3>
      <div className="w-full items-center justify-center">
        <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center gap-4 p-10 ">
          {contactInfo.map((contact, index) => (
            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0 + index * 0.5 }}
              className="flex flex-col items-center gap-3 w-48 border-4 border-neutral-700 rounded-xl p-4"
              key={index}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
            >
              {contact.icon}
              <span className="text-md text-neutral-300">{contact.text}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
