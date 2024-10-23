import { ImWhatsapp } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

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
      <h2 className="my-10 text-center text-4xl font-semibold uppercase">
        Contact
      </h2>
      <h3 className="text-center text-md">
        I can help you create, improve or build the product experience for your
        new or existing products. Feel free to get in touch with me.
      </h3>
      <div className="w-full items-center justify-center">
        <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center gap-4 p-10 ">
          {contactInfo.map((contact, index) => (
            <a
              className="flex flex-col items-center gap-3 w-48 border-4 border-neutral-700 rounded-xl p-4"
              key={index}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
            >
              {contact.icon}
              <span className="text-md text-neutral-300">{contact.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
