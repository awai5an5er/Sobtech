import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import P1 from "../assets/1.png";
import P2 from "../assets/2.png";
import P3 from "../assets/3.png";
import P4 from "../assets/4.png";

export default function App() {
  return (
    <div className="py-6">
      <h2 className="py-4 text-base md:text-[20px] font-medium text-amber-600 flex justify-center">
        Our Team
      </h2>
      <h1 className="font-extrabold text-2xl md:text-3xl lg:text-[40px] flex justify-center text-center px-4">
        Unleash the Power of
      </h1>
      <span className="font-extrabold text-2xl md:text-3xl lg:text-[40px] flex justify-center text-center px-4">
        the Digital Advertising
      </span>
      <div className="py-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center ">
          <div className="bg-[#FFFAF0] rounded-2xl w-full md:w-auto">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
                <div className="px-4 md:px-8 py-4 md:py-8">
                  <p className="font-bold text-xl md:text-2xl lg:text-[30px]">Bessie</p>
                  <p className="font-bold text-xl md:text-2xl lg:text-[30px]">Cooper</p>
                </div>
                <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 gap-4">
                  <p className="font-light text-sm md:text-base">Mentor</p>
                  <div className="relative bg-amber-600 h-1 w-20 md:w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-4 md:w-6 right-0"
                    ></div>
                  </div>
                  <p className="font-light text-sm md:text-base">Designer</p>
                  <div className="relative bg-amber-600 h-1 w-20 md:w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-4 md:w-6 right-0"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4 px-4 md:px-8 py-3">
                  <Twitter className="cursor-pointer" color="#E17100" size={20} />
                  <Facebook className="cursor-pointer" color="#E17100" size={20} />
                  <Instagram className="cursor-pointer" color="#E17100" size={20} />
                  <Linkedin className="cursor-pointer" color="#E17100" size={20} />
                </div>
              </div>
              <img src={P1} alt="" className="w-full md:w-auto" />
            </div>
            <div></div>
          </div>
          <div className="bg-[#FFFAF0] rounded-2xl w-full md:w-auto">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
                <div className="px-4 md:px-8 py-4 md:py-8">
                  <p className="font-bold text-xl md:text-2xl lg:text-[30px]">Bessie</p>
                  <p className="font-bold text-xl md:text-2xl lg:text-[30px]">Cooper</p>
                </div>
                <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 gap-4">
                  <p className="font-light text-sm md:text-base">Mentor</p>
                  <div className="relative bg-amber-600 h-1 w-20 md:w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-4 md:w-6 right-0"
                    ></div>
                  </div>
                  <p className="font-light text-sm md:text-base">Designer</p>
                  <div className="relative bg-amber-600 h-1 w-20 md:w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-4 md:w-6 right-0"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4 px-4 md:px-8 py-3">
                  <Twitter className="cursor-pointer" color="#E17100" size={20} />
                  <Facebook className="cursor-pointer" color="#E17100" size={20} />
                  <Instagram className="cursor-pointer" color="#E17100" size={20} />
                  <Linkedin className="cursor-pointer" color="#E17100" size={20} />
                </div>
              </div>
              <img src={P2} alt="" className="w-full md:w-auto" />
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center py-4 md:py-8 ">
          <div className="bg-[#FFFAF0] rounded-2xl w-full md:w-auto">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
                <div className="px-4 md:px-8 py-4 md:py-8">
                  <p className="font-bold text-xl md:text-2xl lg:text-[30px]">Bessie</p>
                  <p className="font-bold text-xl md:text-2xl lg:text-[30px]">Cooper</p>
                </div>
                <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 gap-4">
                  <p className="font-light text-sm md:text-base">Mentor</p>
                  <div className="relative bg-amber-600 h-1 w-20 md:w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-4 md:w-6 right-0"
                    ></div>
                  </div>
                  <p className="font-light text-sm md:text-base">Designer</p>
                  <div className="relative bg-amber-600 h-1 w-20 md:w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-4 md:w-6 right-0"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4 px-4 md:px-8 py-3">
                  <Twitter className="cursor-pointer" color="#E17100" size={20} />
                  <Facebook className="cursor-pointer" color="#E17100" size={20} />
                  <Instagram className="cursor-pointer" color="#E17100" size={20} />
                  <Linkedin className="cursor-pointer" color="#E17100" size={20} />
                </div>
              </div>
              <img src={P3} alt="" className="w-full md:w-auto" />
            </div>
            <div></div>
          </div>
          <div className="bg-[#FFFAF0] rounded-2xl w-full md:w-auto">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
                <div className="px-4 md:px-8 py-4 md:py-8">
                  <p className="font-bold text-xl md:text-2xl lg:text-[30px]">Bessie</p>
                  <p className="font-bold text-xl md:text-2xl lg:text-[30px]">Cooper</p>
                </div>
                <div className="flex flex-col px-4 md:px-8 py-4 md:py-6 gap-4">
                  <p className="font-light text-sm md:text-base">Mentor</p>
                  <div className="relative bg-amber-600 h-1 w-20 md:w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-4 md:w-6 right-0"
                    ></div>
                  </div>
                  <p className="font-light text-sm md:text-base">Designer</p>
                  <div className="relative bg-amber-600 h-1 w-20 md:w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-4 md:w-6 right-0"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4 px-4 md:px-8 py-3">
                  <Twitter className="cursor-pointer" color="#E17100" size={20} />
                  <Facebook className="cursor-pointer" color="#E17100" size={20} />
                  <Instagram className="cursor-pointer" color="#E17100" size={20} />
                  <Linkedin className="cursor-pointer" color="#E17100" size={20} />
                </div>
              </div>
              <img src={P4} alt="" className="w-full md:w-auto" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
