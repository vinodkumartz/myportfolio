import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"; 

const HeroText = () => {
  return (
    <div className="flex flex-col gap-8 h-full justify-center md:text-left sm:text-center">
      {/* Heading Section */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[3rem] gap-7 sm:text-2xl uppercase text-orange font-bold"
      >
        Data Enthusiast
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl  sm:text-4xl text-orange font-bold uppercase"
      >
        Vinod <br className="sm:hidden md:block" />
        Kumar
      </motion.h1>

      {/* Description Section */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[1.8rem] text-white"
      >
        I am passionate about uncovering insights from data, continuously learning,<br></br> 
        and enhancing my critical thinking, problem-solving, analytical skills,<br></br> 
        statistical analysis, and data visualization. I specialize in creating data <br></br>
        pipelines for complex datasets and making data-driven decisions to build 
        <br></br> impactful AI solutions.
      </motion.p>
    </div>
  );
};

export default HeroText;
