import { useState } from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
type ListType = {
  name: string;
  color: string;
};
type PricingType = {
  name: string;
  des: string;
  yearlyPrice: string;
  montlyPrice: string;
  list: ListType[];
};

const pricingList: PricingType[] = [
  {
    name: "Start",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deleniti?",
    yearlyPrice: "$200",
    montlyPrice: "$39",
    list: [
      { name: "Videos of Lessons", color: "#39DC98" },
      { name: "Homework check", color: "#39DC98" },
      { name: "Additional practical task", color: "#FD809E" },
      { name: "Monthly conferences ", color: "#FD809E" },
      { name: "Personal advice from teachers", color: "#FD809E" },
    ],
  },
  {
    name: "Advence",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deleniti?",
    yearlyPrice: "$230",
    montlyPrice: "$49",
    list: [
      { name: "Videos of Lessons", color: "#39DC98" },
      { name: "Homework check", color: "#39DC98" },
      { name: "Additional practical task", color: "#39DC98" },
      { name: "Monthly conferences ", color: "#39DC98" },
      { name: "Personal advice from teachers", color: "#FD809E" },
    ],
  },
  {
    name: "Premium",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, deleniti?",
    yearlyPrice: "$250",
    montlyPrice: "$59",
    list: [
      { name: "Videos of Lessons", color: "#39DC98" },
      { name: "Homework check", color: "#39DC98" },
      { name: "Additional practical task", color: "#39DC98" },
      { name: "Monthly conferences ", color: "#39DC98" },
      { name: "Personal advice from teachers", color: "#39DC98" },
    ],
  },
];
const Pricing = () => {
  const [isYearly, setisYearly] = useState(false);
  return (
    <div id="pricing" className=" p-4 max-w-screen-2xl  mx-auto ">
      <div className="text-center">
        <h2 className="font-extrabold md:text-5xl text-3xl text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tertinary md:w-1/3 mx-auto px-4">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Montly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full  transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold"> Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            checked={isYearly}
            onChange={() => setisYearly(!isYearly)}
            className="hidden"
          />
        </div>
      </div>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5}}
      >
        {pricingList.map((e, i) => (
          <div
            key={e.name}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:-translate-y-4 transition-all duration-300 ease-in-out"
          >
            <h1 className="text-3xl font-bold text-center text-primary ">
              {e.name}
            </h1>
            <p className="text-tertinary text-center my-5">{e.des}</p>
            <h3 className="mt-5 text-[64px] text-center text-secondary font-bold">
              {isYearly ? `${e.yearlyPrice}` : `${e.montlyPrice}`}
              <span className="text-base text-tertinary font-medium ">
                / {isYearly ? "year" : "month"}
              </span>
            </h3>
            <ul className="mt-4 py-2 px-4">
              {e.list.map((e) => (
                <li key={e.name} className="flex gap-5 items-center ">
                  <div
                    className="w-4 h-4 rounded-full bg-red-500 "
                    style={{ backgroundColor: `${e.color}` }}
                  />
                  {e.name}
                </li>
              ))}
            </ul>
            <div className="w-full mt-8 flex items-center justify-center">
              <button
                className={
                  i == 1
                    ? `btnPrimary`
                    : "w-[216px] py-4 px-10 bg-white font-semibold text-gray-600 rounded-xl border border-solid border-purple-600  hover:bg-purple-600  hover:text-white transition-all duration-300"
                }
              >
                Get started
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
