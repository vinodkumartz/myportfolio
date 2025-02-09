import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-2xl text-beige">
      <SingleInfo text="imvinodkumarr@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91-7505633313" Image={FiPhone} />
      <SingleInfo text="Kashipur,U.S. Nagar,Uttarakhand" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;