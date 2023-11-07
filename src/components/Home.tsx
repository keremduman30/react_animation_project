import homePng from "../assets/home.png";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div className="bg-gradient-to-b from-pink to-secondary rounded-xl rounded-br-[80px] md:p-9 px-9 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          <img src={homePng} className="lg:h-[386px] object-cover" alt="" />
          <div className="w-3/5">
            <h1 className="md:text-7xl text-4xl mb-6 leading-relaxed font-bold text-white">
              Develop your skills without diligence
            </h1>
            <p className="text-2xl text-[#EBEBEB] mb-8">
              A good example of a paragraph contains a topic sentence, details
              and a conclusion. There are many different kinds of animals that
              live in China.
            </p>
            <div className="gap-10 flex md:flex-row flex-col items-center justify-start">
              <button className="btnPrimary">Get Started</button>
              <button className="btnPrimary">Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
