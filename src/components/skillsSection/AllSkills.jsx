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

const AllSkills = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto text-center">
      {/* Text Section
      <h2 className="text-3xl font-bold text-cyan-400 my-4">My Skills</h2>
      <p className="text-lg text-white mx-auto max-w-[800px] mb-8">
        I not only work with these technologies but excel in using them with best practices 
        to deliver high-quality results. I have been working with all these skills to build 
        my portfolio projects.
      </p> */}

      {/* Skill Icons Section */}
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-8 gap-x-50 gap-y-14 justify-center">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <item.icon className="text-8xl text-cyan hover:text-orange-500 transition-all duration-500" />
            <p className="text-beige text-2xl">{item.skill}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
