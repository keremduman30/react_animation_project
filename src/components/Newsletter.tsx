import newsletterImg from "../assets/newsletter.png";
import Banner from "./Banner";
import { BannerItem } from "./Home";
const Newsletter = () => {
  const bannerItem: BannerItem = {
    title: "Each student an share their discount code for friends",
    des: "A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”",
    img: newsletterImg,
    btn1: "I have a code",
  };
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner banner={bannerItem} />
    </div>
  );
};

export default Newsletter;
