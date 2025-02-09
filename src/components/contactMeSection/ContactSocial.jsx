import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 text-5xl">  {/* Increased icon size from text-2xl to text-5xl */}
      <SingleContactSocial link="https://www.linkedin.com/in/vinod-kumar-0411a7250/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/vinodkumartz" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/__vinodkumarr__/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
