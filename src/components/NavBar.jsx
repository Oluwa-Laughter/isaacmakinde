import { isaacWhite } from "../assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={isaacWhite}
          className="h-12 w-34 lg:w-36 lg:h-14"
          alt="isaac-logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
    </nav>
  );
};

export default NavBar;
