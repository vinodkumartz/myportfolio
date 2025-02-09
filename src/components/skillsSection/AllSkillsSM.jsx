import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaPython, FaDocker, FaGitAlt 
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { 
  SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiMongodb, SiFastapi, 
   SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, 
  SiReact
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const skills = [
  // Programming Languages
  { skill: "Python", icon: FaPython },
  { skill: "SQL", icon: TbSql },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },

  // Web Frameworks & APIs
  { skill: "React", icon: SiReact },
  { skill: "FastAPI", icon: SiFastapi },

  // Data Science & Machine Learning
  { skill: "TensorFlow", icon: SiTensorflow },
  { skill: "Scikit-Learn", icon: SiScikitlearn },
  { skill: "Pandas", icon: SiPandas },
  { skill: "NumPy", icon: SiNumpy },

  // Databases & Storage
  { skill: "MongoDB", icon: SiMongodb },

  // DevOps & Version Control
  { skill: "Git", icon: FaGitAlt },
  { skill: "Docker", icon: FaDocker },
];


const AllSkillsSM = () => {
  return (
    <div className="text-beige grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-aqua" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;