import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/oluwa-laughter"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/isaacmakinde_"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://linkedin.com/in/isaacmakinde"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-sm text-neutral-500 text-center">
          &copy; {new Date().getFullYear()} Isaac Makinde. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
