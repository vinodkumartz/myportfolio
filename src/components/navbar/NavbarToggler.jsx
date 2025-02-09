import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className="text-5xl p-4 border border-orange rounded-full flex items-center justify-center"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu size={50} />
    </button>
  );
};

export default NavbarToggler;
