import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const projects = [
  {
    name: "Insight Bot: Interactive PDF Analysis with RAG",
    year: "Nov. 2024",
    align: "right",
    image: "/images/multi-pdf.png", // ✅ Correct path
    link: "https://github.com/vinodkumartz/MultiPDF_RAG-App",
  },
  {
    name: "LLaMA3 Fine-Tuning for Medical Chatbot",
    year: "Nov. 2024",
    align: "left",
    image: "/images/finetune.png", // ✅ Correct path
    link: "https://github.com/vinodkumartz/HealthAI-Finetune-master",
  },
  {
    name: "Email classification using BERT and Ro-BERT models",
    year: "June-Oct. 2024",
    align: "right",
    image: "/images/mail.png", // ✅ Correct path
    link: "https://github.com/vinodkumartz/Phishing-email-classification",
  },
  {
    name: "Real-time-E-Commerce-recommendation-system",
    year: "Jan. 2025",
    align: "left",
    image: "/images/recom.png", // ✅ Correct path
    link: "https://github.com/vinodkumartz/Real-time-E-Commerce-recommendation-system",
  },
  {
    name: "Amazon review classifier using LSTM and BERT",
    year: "Jan. 2025",
    align: "right",
    image: "/images/amazon.png", // ✅ Correct path
    link: "https://github.com/vinodkumartz/MSD23022_Amazon-review-classifier",
  },
  {
    name: "Multilingual-AI-Assistant",
    year: "Oct. 2024",
    align: "left",
    image: "/images/assist.png", // ✅ Correct path
    link: "https://github.com/vinodkumartz/Multilingual-AI-Assistant",
  },
  {
    name: "Optimizing CNNs for Fashion Image Recognition",
    year: "Apr. 2024",
    align: "right",
    image: "/images/cnn.png", // ✅ Correct path
    link: "https://github.com/vinodkumartz/Train-neural-network-modelt-to-classify-images-of-clothes-Shoes",
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} // ✅ Add this line to pass the link prop
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
