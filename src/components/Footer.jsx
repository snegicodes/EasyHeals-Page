import logo from "../assets/easyHealsLogo.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#3D4461] items-center py-5 px-20">
      <div className="flex sm:flex-row flex-col text-white py-4 sm:gap-80 gap-24 justify-between ">
        <div className="flex flex-col gap-6">
          <div>
            <img src={logo} alt="logo" width={240} />
          </div>
          <div className="text-md">Easy access to healthcare</div>
          <div className="flex gap-3 text-2xl cursor-pointer">
            <span>
              <BsFacebook />
            </span>
            <span>
              <BsTwitter />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <BsYoutube />
            </span>
            <span>
              <BsLinkedin />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <span className="font-bold">Company</span>
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">Contact Us</span>
          <span className="cursor-pointer">Terms & Condition</span>
          <span className="cursor-pointer">Privacy Policy</span>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <div className="font-bold">Contact Us</div>
            <div className="flex gap-3 items-center">
              <BsFillTelephoneFill className="text-md" />{" "}
              <span>+91-7510818108</span>
            </div>
            <div className="flex gap-3 items-center">
              <HiMail className="text-xl" /> <span>sales@easyheals.com</span>
            </div>
            <div className="font-bold">Address</div>
            <div className="flex gap-3 items-center">
              <HiLocationMarker className="text-2xl" />{" "}
              <span>
                Pimple Saudagar,
                <br /> Pune 411027
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white mt-8 mb-2">
        Copyrights © 2023 by EasyHeals Technologies Private Limited. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
