import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import AboutMeBackground from "./AboutMeBackground"; // Import background component
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div className="relative py-16 px-4">
      {/* Background Image Component */}
      <AboutMeBackground />

      <div
        id="about"
        className="flex flex-col-reverse md:flex-row gap-12 max-w-[1200px] mx-auto mt-20 justify-between items-center relative"
      >
        {/* Text Section */}
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          <AboutMeText />
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <AboutMeImage />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeMain;
