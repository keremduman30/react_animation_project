import features from "../assets/features.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <div id="feature" className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <motion.div
          className="lg:w-1/4"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-tertinary">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.”
          </p>
        </motion.div>
        <motion.div
          className="w-full lg:w-3/4"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl h-96 p-8 flex justify-center  items-center  hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div className="">
                <img src={features} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl h-96 p-8 flex justify-center  items-center  hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div className="">
                <img src={features} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl h-96 p-8 flex justify-center  items-center  hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div className="">
                <img src={features} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
