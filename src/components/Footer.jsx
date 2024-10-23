import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between">
      <div className="py-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/oluwa-laughter"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://x.com/isaacmakinde_" target="_blank" rel="noreferrer">
          <FaSquareXTwitter />
        </a>

        <a
          href="https://linkedin.com/in/isaacmakinde"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="flex items-center gap-2 text-neutral-300 text-md">
          <span>
            <BiCopyright />
          </span>
          <span>Isaac Makinde</span>
        </p>
        <p className=" text-sm text-neutral-500">
          2023 - <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
