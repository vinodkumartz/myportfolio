const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center h-full w-full">
      <img
        src="../../public/images/about-me.png" // Ensure public folder usage
        alt="Vinod Kumar"
        className="w-auto h-auto max-w-[200px] md:max-w-[200px] sm:max-w-[200] absolute bottom-0 z-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
};

export default HeroImage;
