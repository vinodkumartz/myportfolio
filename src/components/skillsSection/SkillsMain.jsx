import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import SkillsBackground from "./SkillsBackground"; // Import background component
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills" className="relative py-16">
      {/* Background Image Component */}
      <SkillsBackground />

      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex items-center gap-x-6"> {/* Flex for alignment and gap */}
            <SkillsText />
          </div>
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
