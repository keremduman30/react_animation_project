import { BannerItem } from "./Home";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
type BannerType = {
  banner: BannerItem;
};

const Banner = ({ banner }: BannerType) => {
  return (
    <div className="bg-gradient-to-b from-pink to-secondary rounded-xl rounded-br-[80px] md:p-9 px-9 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={banner.img} className="lg:h-[386px] object-cover" alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-3/5"
        >
          <h1 className="md:text-7xl text-4xl mb-6 leading-relaxed font-bold text-white">
            {banner.title}
          </h1>
          <p className="text-2xl text-[#EBEBEB] mb-8">{banner.des}</p>
          <div className="gap-10 flex md:flex-row flex-col items-center justify-start">
            <button className="btnPrimary">{banner.btn1}</button>
            {banner.btn2 && (
              <button className="btnPrimary">{banner.btn2}</button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
