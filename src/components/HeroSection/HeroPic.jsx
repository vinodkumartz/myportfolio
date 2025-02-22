import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center"
    >
      {/* Profile Image */}
      <img src="../../public/images/about-me.png" />

      {/* Hexagon Rings Positioned Below Image */}
      <div className="absolute -bottom-10 flex justify-center items-center">
        <PiHexagonThin className="h-[450px] sm:h-[300px] text-cyan opacity-70 animate-[spin_20s_linear_infinite]" />
      </div>
      <div className="absolute -bottom-10 flex justify-center items-center">
        <PiHexagonThin className="h-[450px] sm:h-[300px] text-orange opacity-50 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
