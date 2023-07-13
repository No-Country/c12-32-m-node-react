import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 py-8 text-center">
      <div className="flex justify-center mb-4">
        <a href="https://www.facebook.com" className="mr-4 hover:text-white transition-all duration-300">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" className="mr-4 hover:text-white transition-all durartion-300">
          <FaInstagram size={24} />
        </a>
        <a href="mailto:example@example.com" className="hover:text-white transition-all duration-300">
          <HiOutlineMail size={24} />
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        PET SOCIETY-NO COUNTRY &copy; {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
