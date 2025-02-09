import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  // Function to open the link in a new tab
  const openLink = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer"); // Opens in a new tab securely
    } else {
      console.error("Project link is missing!");
    }
  };

  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "right" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-4xl font-semibold sm:text-2xl text-aqua">{name}</h2>
        <h2
          className={`text-2xl font-thin font-semibold text-orange font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>

        {/* Fixed View Button */}
        <button 
          onClick={openLink} 
          className="border border-orange rounded-full py-5 px-12 text-lg flex gap-2 items-center mt-6 hover:bg-teal-900 transition-all duration-500 cursor-pointer"
        >
          <span className="text-orange text-2xl hover:text-cyan transition-all duration-500">
            View
          </span>
          <BsFillArrowUpRightCircleFill />
        </button>
      </div>

      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website preview" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
