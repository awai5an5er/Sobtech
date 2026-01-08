import Pic1 from "../assets/img1.svg";
import Pic2 from "../assets/img2.svg";
import Pic3 from "../assets/img3.svg";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row -my-0.5 md:h-170 bg-yellow-50 mx-4 md:mx-10 lg:mx-20">
      <div className="py-8 px-2 md:py-30">
        <img
          className="py-5 px-4 md:px-10 transition-transform duration-300 hover:rotate-6 cursor-pointer w-16 md:w-auto"
          src={Pic1}
          alt=""
        />
        <h2 className="py-5 px-4 md:px-10 text-xl md:text-2xl lg:text-3xl font-bold">
          Prestige Management
        </h2>
        <p className="py-5 px-4 md:px-10 text-base md:text-xl lg:text-2xl">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-4 md:px-10 text-base md:text-xl lg:text-2xl text-amber-600 hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
      <div className="py-8 px-2 md:py-30">
        <img
          className="py-5 px-4 md:px-6 transition-transform duration-300 hover:rotate-6 cursor-pointer w-16 md:w-auto"
          src={Pic2}
          alt=""
        />
        <h2 className="py-5 px-4 md:px-6 text-xl md:text-2xl lg:text-3xl font-bold">
          Prestige Management
        </h2>
        <p className="py-5 px-4 md:px-6 text-base md:text-xl lg:text-2xl">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-4 md:px-6 text-base md:text-xl lg:text-2xl text-amber-600 hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
      <div className="py-8 px-2 md:py-30">
        <img
          className="py-5 px-4 md:px-6 transition-transform duration-300 hover:rotate-6 cursor-pointer w-16 md:w-auto"
          src={Pic3}
          alt=""
        />
        <h2 className="py-5 px-4 md:px-6 text-xl md:text-2xl lg:text-3xl font-bold">
          Prestige Management
        </h2>
        <p className="py-5 px-4 md:px-6 text-base md:text-xl lg:text-2xl">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-4 md:px-6 text-base md:text-xl lg:text-2xl text-amber-600 hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
    </div>
  );
}
