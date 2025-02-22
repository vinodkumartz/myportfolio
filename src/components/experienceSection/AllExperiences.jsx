import React, { useState } from "react";

const experiences = [
  {
    title: "Data Science Research Intern",
    company: "Jio Platforms Limited",
    duration: "June 2024 - Oct. 2024",
    responsibilities: [
      "Developed an Indoor Coverage Prediction Model leveraging Multi-Wall and Ray Tracing approaches.",
      "Computed signal losses and excess delay at 2.4 GHz for orthogonal and parallel polarization using the PyLayers library.",
      "The model revealed losses of 14.97 dB (orthogonal) and 9.82 dB (parallel), with excess delays of 1.05 ns and 1.19 ns.",
      "These insights helped optimize indoor signal strength and network performance for wireless communication and coverage enhancement.",
      "Processed 1,176 UE locations for each of the 5 access points (APs) to analyze coverage performance.",
      "bserved path loss values ranged from -73.73 dB to -86.82 dB across different APs.",
     " Computed coverage times: ~6.3 seconds for AP1, ~19.5 seconds for AP4, with variations in other APs.",
     "Error analysis showed deviations of up to 30 dB between PyLayers Multi-Wall Model and METIS Ray Tracing predictions.",
      "Generated detailed path loss graphs, error histograms, and coverage heatmaps to visualize differences between models.",
    ],
  },
  {
    title: "Teacher Assistance of Probability and Statistics",
    supervisor: "Dr. Madhurima Datta",
    department: "Department of Mathematics, IIIT Lucknow",
    duration: "Sep. 2023 - Dec. 2023",
    responsibilities: [
      "Helping students with their assignments and doubts.",
      "Assisting in the preparation of lecture notes and study materials.",
      "Conducting tutorials and quizzes.",
      "Grading assignments and quizzes.",
      "Assisting in the preparation of question papers.",
      "Assisting in the evaluation of answer scripts.",
      "Assisting in the preparation of the final grade.",
    ],
  },
  {
    title: "Teacher Assistance of Programming with Python",
    supervisor: "Dr. Sirsendu Sekhar Barman",
    department: "Department of Mathematics, IIIT Lucknow",
    duration: "Jan. 2024 - May 2024",
    responsibilities: [
      "Helping students with their assignments and doubts.",
      "Assisting in the preparation of lecture notes and study materials.",
      "Conducting tutorials and quizzes.",
      "Grading assignments and quizzes.",
      "Assisting in the preparation of question papers.",
      "Assisting in the evaluation of answer scripts.",
      "Assisting in the preparation of the final grade.",
    ],
  },
  
];

const ExperienceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-center">
      <div className="relative bg-gray-900 text-white p-8 rounded-xl shadow-xl w-full sm:w-[90%] mx-auto">

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-orange">
          {experiences[currentIndex].title}
        </h3>

        {/* Supervisor */}
        {experiences[currentIndex].supervisor && (
          <p className="text-lg md:text-2xl text-orange mt-2">
            {experiences[currentIndex].supervisor}
          </p>
        )}

        {/* Company/Department */}
        <p className="text-lg md:text-3xl text-orange mt-2">
          {experiences[currentIndex].department || experiences[currentIndex].company}
        </p>

        {/* Duration */}
        <p className="text-md  md:text-2xl text-gray-400 mt-2">
          {experiences[currentIndex].duration}
        </p>

        {/* Responsibilities */}
        <ul className="mt-6 md:text-2xl text-left space-y-2 text-md sm:text-lg">
          {experiences[currentIndex].responsibilities.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-orange mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevExperience}
            className="bg-blue-500 md:text-3xl text-orange px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600"
          >
            ← Previous
          </button>
          <button
            onClick={nextExperience}
            className="bg-blue-500 md:text-3xl text-orange  px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
