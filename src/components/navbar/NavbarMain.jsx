import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuArrowDownRight } from "react-icons/lu";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-[50%] -translate-x-[50%] w-[90%] max-w-[1300px] z-50 bg-slate-950 shadow-md rounded-full">
      <div className="flex items-center justify-between px-6 py-4 rounded-full">
        {/* Logo */}
        <h1 className="text-darkOrange font-bold text-3xl md:text-4xl">
          <span className="hidden sm:inline">Vinod Kumar</span>
          <span className="sm:hidden">VK</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-2xl">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer text-orange hover:text-cyan transition-all duration-300"
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button className="hidden md:flex px-5 py-3 rounded-full text-2xl font-bold text-darkOrange border border-orange flex items-center gap-2 bg-gradient-to-r from-darkCyan transition-transform duration-300 hover:scale-105">
          <Link spy={true} smooth={true} duration={500} offset={-100} to="contact">
            Hire Me
          </Link>
          <LuArrowDownRight />
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-4xl text-cyan" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-white py-6 absolute top-full left-0 w-full shadow-lg rounded-b-3xl">
          <ul className="flex flex-col items-center gap-6 text-xl">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="cursor-pointer text-orange hover:text-cyan transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-6">
            <button
              className="px-6 py-3 rounded-full text-lg font-bold text-darkOrange border border-orange bg-gradient-to-r from-darkCyan transition-transform duration-300 hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              <Link spy={true} smooth={true} duration={500} offset={-100} to="contact">
                Hire Me
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
