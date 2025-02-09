import { Link } from "react-scroll";

const AboutMeText = () => {
  // Function to open resume in a new tab
  const handleOpenResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/13457vMgnZmipJGvcavEI_gigaLBsMiUc/view?usp=sharing"; 
    window.open(resumeUrl, "_blank", "noopener,noreferrer"); // ✅ Opens in a new tab
  };

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-aqua font-bold mb-10">About Me</h2>
      <p className="text-3xl text-beige mb-10"> 
        I am a data enthusiast with a strong foundation in statistics, machine learning, and AI. 
        My academic journey began with a Bachelor’s degree in Statistics from Ramjas College, University of Delhi, 
        and I am currently pursuing a Master’s in Data Science at IIIT Lucknow.<br></br>
        I gained industry experience as a Data Science Research Intern at Jio Platforms, 
        where I worked on developing an Indoor Coverage Prediction Model using MultiWall and Ray Tracing approaches.
        This experience strengthened my skills in data analysis, predictive modeling, and optimization techniques.<br></br>
        Beyond academics, I have worked on projects involving LLM-powered chatbots, recommendation systems, and phishing 
        detection, applying advanced machine learning and AI techniques. I am passionate about leveraging data to solve 
        real-world problems and continuously expanding my expertise in the field.
      </p>

      {/* Buttons Section */}
      <div className="flex gap-6 mt-10">
        {/* Projects Button */}
        <button className="border border-orange rounded-full py-8 px-12 text-lg flex gap-2 items-center 
                          hover:bg-teal-900 transition-all duration-500 cursor-pointer">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-3xl text-beige hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>

        {/* Resume Download Button */}
        <button 
          onClick={handleOpenResume} 
          className="border border-orange rounded-full py-8 px-12 text-lg flex gap-2 items-center 
                     hover:bg-teal-900 transition-all duration-500 cursor-pointer"
        >
          <span className="text-3xl text-beige hover:text-cyan transition-all duration-500">
            Open Resume
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
