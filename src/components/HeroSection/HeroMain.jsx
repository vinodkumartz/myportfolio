import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroBackground from "./HeroBackground";

const HeroMain = () => {
  return (
    <div 
      className="relative pt-40 pb-16 bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('/images/evening.jpg')" }} // Corrected path
    >
      <HeroBackground /> 

      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
