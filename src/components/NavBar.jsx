import { useState, useEffect } from "react";
import { isaacWhite } from "../assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#050510]/80 backdrop-blur-xl py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#">
          <img src={isaacWhite} className="h-10 w-auto" alt="Isaac Makinde" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-cyan-400 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/oluwa-laughter"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/isaacmakinde_"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://linkedin.com/in/isaacmakinde"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
