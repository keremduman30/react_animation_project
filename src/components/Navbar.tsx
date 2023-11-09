import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-scroll";

type navItem = {
  link: string;
  name: string;
};
const Navbar = () => {
  const navLink: navItem[] = [
    { link: "home", name: "home" },
    { link: "feature", name: "feature" },
    { link: "about", name: "about" },
    { link: "pricing", name: "pricing" },
  ];
  const [clickMenu, setclickMenu] = useState<boolean>(false);
  return (
    <>
      <nav
        id="navbar"
        className="bg-white h-20 font-medium   flex justify-between  my-5 max-w-screen-2xl text-primary mx-2 xl:mx-auto fixed -top-5 right-0 left-0"
      >
        <div className="flex gap-5 items-center  ">
          <Link
            to="navbar"
            smooth
            duration={500}
            className="text-2xl font-semibold flex items-center gap-8 text-primary"
          >
            <img src={logo} alt="logo" className="w-10" />
            <span>XYZ</span>
          </Link>
          <ul className="hidden sm:flex gap-12 text-2xl ">
            {navLink.map((e) => (
              <Link
                to={e.link}
                activeClass="active"
                spy={true}
                offset={-100}
                smooth
                duration={500}
                href={e.link}
                key={e.link}
                className="hover:text-gray-400"
              >
                {e.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <a
            href="#"
            className="hidden lg:flex items-center hover:text-secondary  font-medium text-xl "
          >
            <GrLanguage className="mr-2" /> Language
          </a>
          <button className="hidden sm:flex  bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600 ">
            Sign Up
          </button>
          <span className="sm:hidden" onClick={() => setclickMenu(!clickMenu)}>
            {clickMenu ? (
              <ImCancelCircle className="text-3xl" />
            ) : (
              <AiOutlineMenu className=" text-3xl" />
            )}
          </span>
        </div>
      </nav>
      {clickMenu && (
        <div className="fixed top-0 right-0 left-0 flex flex-col bg-secondary gap-5 p-7 text-xl mt-20 text-white">
          {navLink.map((e) => (
            <Link
              to={e.link}
              activeClass="active"
              spy={true}
              offset={-100}
              smooth
              duration={500}
              key={e.link}
              className="hover:text-gray-400 hover:bg-transparent focus:outline-none focus:text-gray-400"
            >
              {e.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
