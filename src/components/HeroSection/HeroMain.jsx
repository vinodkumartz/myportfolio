import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroBackground from "./HeroBackground";

const HeroMain = () => {
  return (
    <div className="relative pt-28 pb-12 bg-cover bg-center bg-no-repeat">
      <HeroBackground /> 

      {/* Flex container for Hero Section */}
      <div className="flex flex-col-reverse md:flex-row max-w-[1200px] mx-auto justify-between items-center px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
