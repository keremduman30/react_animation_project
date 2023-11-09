import logo from "../assets/logo.png";
import insta from "../assets/insta.png";
import face from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedln from "../assets/linkedln.png";
import { Link } from "react-scroll";
type footerType = {
  title: string;
  links: string[];
};
const Footer = () => {
  const socialMediaList = [insta, face, twitter, linkedln];
  const footerLinks: footerType[] = [
    { title: "Platform", links: ["Overview", "Features", "About", "Pricing"] },
    {
      title: "Help",
      links: [
        "How does it works?",
        "Where to ask question?",
        "How to play?",
        "What is needed for this?",
      ],
    },
    {
      title: "Contacts",
      links: [
        "(012) 1234-567-890",
        "123 xyz xyz qwuerybaihefv, qiwu - hrebcl 095467",
      ],
    },
  ];
  return (
    <div className="md:px-52 p-4  mx-auto bg-[#010851] text-white">
      <div className="my-12 flex flex-col md:flex-row  ">
        <div className="md:w-1/2 space-y-8">
          <Link
            to="home"
            smooth
            duration={500}
            className="text-2xl font-semibold flex items-center gap-8 text-primary"
          >
            <img src={logo} alt="logo" className="w-10" />
            <span className="text-white">XYZ</span>
          </Link>
          <p className="md:w-1/2">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>
          <div className="flex items-center flex-col sm:flex-row gap-5 sm:gap-0">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-3 px-4 rounded-md focus:outline-none w-full sm:w-auto"
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-secondary cursor-pointer -ml-2 py-3 px-4 rounded-md focus:outline-none hover:bg-white hover:text-primary"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          {footerLinks.map((e) => (
            <div key={e.title} className="space-y-4 mt-5">
              <h4 className="text-2xl">{e.title}</h4>
              <ul className="space-y-3">
                {e.links.map((e) => (
                  <a key={e} href="#" className="block hover:text-gray-300">
                    {e}
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="" />
      <div className="flex flex-col sm:flex-row items-center justify-between my-8 gap-5 ">
        <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {socialMediaList.map((e) => (
            <img key={e} src={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
