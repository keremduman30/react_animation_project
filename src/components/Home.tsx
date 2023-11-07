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
            <div className="space-x-5 space-y-4">
              <button className="btnPrimary">Get Started</button>
              <button className="btnPrimary">Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*     <div className="flex  items-center justify-between  md:px-12 h-[400px] rounded-xl rounded-br-[120px] p-4 max-w-screen-2xl mx-auto mt-28 w-full bg-gradient-to-b from-pink to-secondary">
      <div className="flex-[3] my-5">
        <h1 className="text-7xl font-bold text-white">
          Develop your skills without diligence
        </h1>
        <p className="text-lg text-white my-5">
          A good example of a paragraph contains a topic sentence, details and a
          conclusion. There are many different kinds of animals that live in
          China.
        </p>
        <div className="flex gap-8">
          <button className="w-auto rounded-md  p-2 px-5 text-white font-medium bg-secondary">
            Get Started
          </button>
          <button className="w-auto rounded-md  p-2 px-5 text-white font-medium bg-secondary">
            Discount
          </button>
        </div>
      </div>
      <div className="flex-[2] mx-auto">
        <img
          src={homePng}
          className="lg:h-[368px] object-cover py-5"
          alt=""
        />
      </div>
    </div> */
  );
};

export default Home;
