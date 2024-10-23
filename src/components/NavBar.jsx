import { isaacWhite } from "../assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={isaacWhite} className="h-14 w-36" alt="isaac-logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaSquareXTwitter />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default NavBar;
