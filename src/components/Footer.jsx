import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import Logo from "../assets/footer-logo.svg";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";

export default function App() {
  return (
    <div className="bg-[#0E191E] text-white py-4">
      <div className="flex flex-col md:flex-row justify-evenly px-4 md:px-0 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 px-4 md:px-8 py-4 md:py-6">
          <img className="size-20 md:size-30" src={Logo} alt="" />
          <p className="text-sm md:text-base">Financial planners help people to gain knowledge about</p>
          <p className="font-bold text-sm md:text-base">Follow Us</p>
          <div className="flex gap-6 md:gap-10 py-4 md:py-6">
            <Twitter className="cursor-pointer" color="#E17100" size={20} />
            <Facebook className="cursor-pointer" color="#E17100" size={20} />
            <Instagram className="cursor-pointer" color="#E17100" size={20} />
            <Linkedin className="cursor-pointer" color="#E17100" size={20} />
          </div>
        </div>
        <div className="px-4 md:px-3 py-4 md:py-18 flex flex-col gap-3 md:gap-4">
          <p className="font-bold text-sm md:text-base">Quick Links</p>
          <p className="text-sm md:text-base">About Us </p>
          <p className="text-sm md:text-base">Service</p>
          <p className="text-sm md:text-base">Contact Us</p>
          <p className="text-sm md:text-base">Blog Post</p>
          <p className="text-sm md:text-base">Team Members</p>
        </div>
        <div className="px-4 md:px-6 py-4 md:py-18 flex flex-col gap-6 md:gap-10 w-full md:w-[350px] flex-wrap">
          <p className="font-bold text-sm md:text-base">Contact</p>
          <p className="flex gap-2 text-sm md:text-base">
            <MapPin color="#E17100" size={18} />
            Address <span className="font-bold">66 Gulberg, Lahore</span>
          </p>
          <p className="flex gap-2 text-sm md:text-base">
            <Phone color="#E17100" size={18} />
            Phone Number <span className="font-bold">99 999 999 99</span>
          </p>
          <p className="flex gap-2 text-sm md:text-base">
            <Mail color="#E17100" size={18} />
            Email <span className="font-bold">abcd@sobtech.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 px-4 md:px-5 py-4 md:py-18">
          <p className="font-bold text-sm md:text-base">Newsletter</p>
          <p className="text-sm md:text-base">Sdipiscing elit. Sed sit amet rcus nunc her it goes</p>
          <div className="relative flex border-2 border-white rounded-2xl ">
            <input className="h-[50px] md:h-[70px] outline-none px-2 w-[80%] text-sm md:text-base" type="text" />
            <Send
              className="absolute top-3 md:top-5 right-1 w-[20%] cursor-pointer"
              color="#E17100"
              size={20}
            />
          </div>
        </div>
      </div>
      <div className="bg-white h-0.5 opacity-10  w-full flex justify-center"></div>
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 py-4 md:py-6 font-extralight gap-4 md:gap-0">
        <p className="text-xs md:text-sm text-center md:text-left">© Yoursitename 2024 | All Rights Reserved</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 text-xs md:text-sm text-center md:text-left">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
