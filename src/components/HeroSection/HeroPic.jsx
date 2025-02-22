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
      <img
<<<<<<< HEAD
        src="../../public/images/about-me.png"
=======
        src="/images/HexaPic.png" 
>>>>>>> 6c49e6190e40152519ce75444f1f503cf0f7a008
        alt="Vinod Kumar"
        className="max-h-[500px] sm:max-h-[400px] w-auto z-10"
      />

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
