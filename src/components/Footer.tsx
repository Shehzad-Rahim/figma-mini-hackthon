import { FaLinkedin , FaGithub , FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full lg:px-20 sm:px-10 px-5 pt-10 pb-5 bg-[#eafefe]">
      <div className="flex flex-col gap-2 sm:text-start text-center">
      <h1 className="text-[#457b9d] sm:text-2xl text-xl font-semibold" id="Contact">Contacts </h1>
      <h2 className="lg:text-5xl text-3xl font-bold ">Get Touch</h2>
      <p>rizfanher@gmail.com</p>
      <ul className="flex gap-4 w-full sm:justify-start justify-center text-[#457b9d] text-2xl">
       <li><FaLinkedin /></li>
       <li><FaGithub /></li>
       <li><FaInstagram /></li>
      </ul>
    </div>
        <p className="mt-5 xs:text-nr text-sm sm:text-start text-center ">Copyright <span className="text-xs font-semibold italic">&copy;</span> 2023. Develop & Designed by Rizfan Herlaya</p>
    </div>
  );
};

export default Footer;


