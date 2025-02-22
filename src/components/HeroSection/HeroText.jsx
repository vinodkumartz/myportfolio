import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center text-center md:text-left">
      {/* Heading Section */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-5xl md:text-5xl lg:text-6xl text-orange font-bold uppercase"
      >
        Data Enthusiast
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl md:text-4xl lg:text-5xl text-orange font-bold uppercase"
      >
        Vinod Kumar
      </motion.h1>

      {/* Description Section */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-2xl text-2xl md:text-2xl lg:text-2xl text-white leading-relaxed max-w-xl mx-auto md:mx-0"
      >
        
        I am passionate about uncovering insights from data, continuously learning,
        and refining my problem-solving, analytical, and statistical skills.  
        I specialize in building data pipelines, visualizing complex datasets,  
        and making data-driven decisions to develop impactful AI solutions.
      </motion.p>
    </div>
  );
};

export default HeroText;
