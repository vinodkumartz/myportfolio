import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import ExperienceBackground from "./ExperienceBackground"; // Import background component
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div id="experience" className="relative py-16">
      {/* Background Image Component */}
      <ExperienceBackground />

      <div className="max-w-[1200px] mx-auto px-4 relative">
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ExperienceText />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <ExperienceTop />
        </motion.div>
        <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
        <AllExperiences />
      </div>
    </div>
  );
};

export default ExperienceMain;
