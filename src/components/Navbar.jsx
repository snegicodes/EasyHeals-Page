import { useState } from "react";
import logo from "../assets/easyHealsLogo.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center flex-wrap  sticky top-0 z-[10] w-full sm:px-20 px-10 py-2 bg-gray-100 shadow-xl">
      <div className="sm:w-52 w-44">
        <img src={logo} alt="" />
      </div>
      <div className="sm:flex sm:justify-between sm:items-center sm:gap-16 hidden">
        <span className="hover:text-orange-600 cursor-pointer">About Us</span>
        <span className="hover:text-orange-600 cursor-pointer">Services</span>
        <span className="hover:text-orange-600 cursor-pointer">Doctors</span>
        <span className="hover:text-orange-600 cursor-pointer">Hospitals</span>
        <span className="bg-orange-600 cursor-pointer text-white py-1 px-6 rounded-md  hover:bg-orange-300">
          Install App
        </span>
      </div>
      <div className="text-xl sm:hidden">
        <button onClick={navToggle}>
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-3 py-5 basis-full items-center ">
          <span className="hover:text-orange-600 cursor-pointer">About Us</span>
          <span className="hover:text-orange-600 cursor-pointer">Services</span>
          <span className="hover:text-orange-600 cursor-pointer">Doctors</span>
          <span className="hover:text-orange-600 cursor-pointer">
            Hospitals
          </span>
          <span className="bg-orange-600 cursor-pointer text-white py-1 px-6 rounded-md hover:bg-orange-300">
            Install App
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
