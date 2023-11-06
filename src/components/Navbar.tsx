import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
type navItem = {
  link: string;
  name: string;
};
const Navbar = () => {
  const navLink: navItem[] = [
    { link: "Overview", name: "home" },
    { link: "Feature", name: "feature" },
    { link: "About", name: "about" },
    { link: "Pricing", name: "pricing" },
  ];
  const [clickMenu, setclickMenu] = useState<boolean>(false);
  return (
    <>
      <nav className="bg-white    flex justify-between  my-5 max-w-screen-2xl text-primary mx-5 xl:mx-auto fixed top-0 right-0 left-0">
        <div className="flex gap-5 items-center  ">
          <a
            href="#"
            className="text-2xl font-semibold flex items-center gap-8 text-primary"
          >
            <img src={logo} alt="logo" className="w-10" />
            <span>XYZ</span>
          </a>
          <ul className="hidden sm:flex gap-12 text-2xl ">
            {navLink.map((e) => (
              <a href={e.link} key={e.link} className="hover:text-gray-400">
                {e.name}
              </a>
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
        <div className="fixed top-0 right-0 left-0 flex flex-col bg-secondary gap-5 p-7 text-xl mt-20">
          {navLink.map((e) => (
            <a
              href={e.link}
              key={e.link}
              className="hover:text-gray-400 hover:bg-transparent focus:outline-none focus:text-gray-400"
            >
              {e.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
