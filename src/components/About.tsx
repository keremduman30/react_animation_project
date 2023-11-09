import about from "../assets/about.png";
import about2 from "../assets/about2.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="about" className=" p-4 max-w-screen-2xl  mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
        <motion.div
          className="md:w-1/2 "
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={about} alt="" />
        </motion.div>
        <motion.div
          className="md:w-2/5"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tertinary text-lg mb-7 ">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10   ">
        <motion.div
          className="md:w-1/2 "
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={about2} alt="" />
        </motion.div>
        <motion.div
          className="md:w-2/5 "
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any
            <br />
            <span className="text-secondary">time convinent for you.</span>
          </h2>

          <p className="text-tertinary text-lg mb-7 ">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
