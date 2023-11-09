import homePng from "../assets/home.png";
import Banner from "./Banner";
export type BannerItem = {
  img: string;
  title: string;
  des: string;
  btn1: string;
  btn2?: string;
};
const Home = () => {
  const bannerItem: BannerItem = {
    title: "Develop your skills without diligence",
    des: "A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.",
    img: homePng,
    btn1: "Get Started",
    btn2: "Discount",
  };
  return (
    <div id="home" className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <Banner banner={bannerItem} />
    </div>
  );
};

export default Home;
