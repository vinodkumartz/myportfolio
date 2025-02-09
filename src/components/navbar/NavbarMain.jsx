import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1500px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
       <div className="flex justify-between w-full max-w-[1500px] mx-auto  bg-slate-950 items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
      <NavbarLogo />
      <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
        <NavbarLinks />
      </div>
      <NavbarBtn />
    </div>
    <div className="flex lg:hidden sm:block p-6 items-center justify-center rounded-full">
      <button className="text-6xl p-3 text-cyan" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
    </div>
  </nav>
  
  );
};

export default NavbarMain;


