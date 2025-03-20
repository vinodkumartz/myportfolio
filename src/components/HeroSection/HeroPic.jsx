import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

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
        src="../../public/images/my.png"
        alt="Vinod Kumar"
        className="w-auto h-auto max-w-[500px] md:max-w-[450px] sm:max-w-[350px]" 
      />
    </motion.div>
  );
};

export default HeroPic;
