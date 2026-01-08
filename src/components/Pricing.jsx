import Basic from "../assets/basic.png";
import Consult from "../assets/consult.png";
import Premium from "../assets/premium.png";
import Check from "../assets/checkmark.png";

export default function App() {
  return (
    <div className="py-20 bg-[#F7F7F7]">
      <h2 className="py-4 text-base md:text-[20px] font-medium text-amber-600 flex justify-center">
        Our Pricing
      </h2>
      <h1 className="font-extrabold text-2xl md:text-3xl lg:text-[40px] flex justify-center text-center px-4">
        Drive Growth Through Digital
      </h1>
      <span className="font-extrabold text-2xl md:text-3xl lg:text-[40px] flex justify-center text-center px-4">
        the and Marketing
      </span>
      <div className="flex flex-col md:flex-row py-10 justify-evenly gap-6 md:gap-0 px-4 md:px-0">
        <div className="px-5 py-5 flex flex-col bg-white rounded-2xl w-full md:w-auto">
          <div className="flex justify-around gap-15">
            <p className="text-xl md:text-2xl lg:text-[30px] font-bold">Basic</p>
            <p className="text-xl md:text-2xl lg:text-[30px] font-bold">
              $29 <span className="font-extralight text-xs md:text-sm lg:text-[15]">/month</span>
            </p>
          </div>
          <img
            className="flex py-8 px-8 md:px-14 h-40 md:h-60 justify-center mx-auto"
            src={Basic}
            alt=""
          />
          <hr className="px-2" />
          <div className="py-6 px-3">
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Your Startup
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Knew About Fonts
            </p>
          </div>
          <button
            className="w-full relative z-30 overflow-hidden border-2 border-amber-600 px-8 md:px-20 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    text-amber-600 transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-amber-500 before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    after:absolute after:top-0 after:left-0 after:w-full after:bg-amber-600 after:h-0 after:transition-all after:duration-500 after:delay-200
                    hover:after:h-full after:z-20
                    hover:text-white"
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
        <div className="px-5 py-5 flex flex-col bg-white rounded-2xl w-full md:w-auto">
          <div className="flex justify-around gap-15">
            <p className="text-xl md:text-2xl lg:text-[30px] font-bold">Consult</p>
            <p className="text-xl md:text-2xl lg:text-[30px] font-bold">
              $29 <span className="font-extralight text-xs md:text-sm lg:text-[15]">/month</span>
            </p>
          </div>
          <img
            className="flex py-8 px-8 md:px-20 h-40 md:h-60 justify-center mx-auto"
            src={Consult}
            alt=""
          />
          <hr className="px-2" />
          <div className="py-6 px-3">
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Your Startup
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Knew About Fonts
            </p>
          </div>
          <button
            className="w-full
                    relative overflow-hidden border-2 border-amber-600 bg-amber-600 text-white 
                    px-5 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    transition-all duration-300 hover:text-black hover:bg-white

                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full 
                    before:bg-amber-500 before:transition-all before:duration-300 before:z-10 
                    hover:before:h-full

                    after:absolute after:top-0 after:left-0 after:w-full after:h-0 
                    after:bg-white after:transition-all after:duration-500 after:delay-200 after:z-20
                    hover:after:h-full"
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
        <div className="px-5 py-5 flex flex-col bg-white rounded-2xl w-full md:w-auto">
          <div className="flex justify-around gap-15">
            <p className="text-xl md:text-2xl lg:text-[30px] font-bold">Premium</p>
            <p className="text-xl md:text-2xl lg:text-[30px] font-bold">
              $29 <span className="font-extralight text-xs md:text-sm lg:text-[15]">/month</span>
            </p>
          </div>
          <img
            className="flex py-8 px-8 md:px-20 h-40 md:h-60 justify-center mx-auto"
            src={Premium}
            alt=""
          />
          <hr className="px-2" />
          <div className="py-6 px-3">
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Your Startup
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2 text-sm md:text-base">
              <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" /> Knew About Fonts
            </p>
          </div>
          <button
            className="w-full relative z-30 overflow-hidden border-2 border-amber-600 px-8 md:px-20 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    text-amber-600 transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-amber-500 before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    after:absolute after:top-0 after:left-0 after:w-full after:bg-amber-600 after:h-0 after:transition-all after:duration-500 after:delay-200
                    hover:after:h-full after:z-20
                    hover:text-white"
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
