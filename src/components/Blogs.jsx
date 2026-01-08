import Card1 from "../assets/1_card.png";
import Card2 from "../assets/2_card.png";
import Card3 from "../assets/3_card.png";
import { CalendarDays } from "lucide-react";
import { User } from "lucide-react";

export default function App() {
  return (
    <div className=" py-10 bg-[#FFFAF0] ">
      <h2 className="py-4 text-base md:text-[20px] font-medium text-amber-600 flex justify-center">
        Our Blogs
      </h2>
      <h1 className="font-extrabold text-2xl md:text-3xl lg:text-[40px] flex justify-center text-center px-4">
        Boost Your Business
      </h1>
      <span className="font-extrabold text-2xl md:text-3xl lg:text-[40px] flex justify-center text-center px-4">
        with Digital most
      </span>
      <span className="font-extrabold text-2xl md:text-3xl lg:text-[40px] flex justify-center text-center px-4">
        Marketing
      </span>
      <div className="flex flex-col md:flex-row justify-evenly py-10 bg-[#FFFAF0] gap-6 md:gap-0 px-4 md:px-0">
        <div className="bg-white rounded-bl-3xl rounded-br-3xl w-full md:w-auto">
          <img src={Card1} alt="" className="w-full" />
          <div className="flex flex-col md:flex-row py-6 md:py-10 px-3 gap-2 md:gap-0">
            <p className="flex px-4 text-sm md:text-base">
              <CalendarDays color="#cf6a17" size={18} />
              <span className="px-2">October 19, 2022</span>
            </p>
            <p className="flex px-4 text-sm md:text-base">
              <User color="#cf6a17" size={18} />
              <span className="px-2"> Mesbah</span>
            </p>
          </div>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-10">
            Inspire meets brands with
          </h1>
          <span className="font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-10 ">digital technology</span>
          <p className="px-6 md:px-10 py-6 md:py-10 text-base md:text-lg lg:text-[20px]">
            <a className=" text-amber-600 hover:font-bold" href="">
              Read more→
            </a>
          </p>
        </div>
        <div className="bg-white rounded-bl-3xl rounded-br-3xl w-full md:w-auto">
          <img src={Card2} alt="" className="w-full" />
          <div className="flex flex-col md:flex-row py-6 md:py-10 px-3 gap-2 md:gap-0">
            <p className="flex px-4 text-sm md:text-base">
              <CalendarDays color="#cf6a17" size={18} />
              <span className="px-2">October 19, 2022</span>
            </p>
            <p className="flex px-4 text-sm md:text-base">
              <User color="#cf6a17" size={18} />
              <span className="px-2"> Mesbah</span>
            </p>
          </div>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-10">
            Inspire meets brands with
          </h1>
          <span className="font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-10 ">digital technology</span>
          <p className="px-6 md:px-10 py-6 md:py-10 text-base md:text-lg lg:text-[20px]">
            <a className=" text-amber-600 hover:font-bold" href="">
              Read more→
            </a>
          </p>
        </div>
        <div className="bg-white rounded-bl-3xl rounded-br-3xl w-full md:w-auto">
          <img src={Card3} alt="" className="w-full" />
          <div className="flex flex-col md:flex-row py-6 md:py-10 px-3 gap-2 md:gap-0">
            <p className="flex px-4 text-sm md:text-base">
              <CalendarDays color="#cf6a17" size={18} />
              <span className="px-2">October 19, 2022</span>
            </p>
            <p className="flex px-4 text-sm md:text-base">
              <User color="#cf6a17" size={18} />
              <span className="px-2"> Mesbah</span>
            </p>
          </div>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-10">
            Inspire meets brands with
          </h1>
          <span className="font-bold text-lg md:text-xl lg:text-2xl px-6 md:px-10 ">digital technology</span>
          <p className="px-6 md:px-10 py-6 md:py-10 text-base md:text-lg lg:text-[20px]">
            <a className=" text-amber-600 hover:font-bold" href="">
              Read more→
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
