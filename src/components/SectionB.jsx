import Pic1 from "../assets/img-4.png";
import Check from "../assets/checkmark.png";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row my-10 md:my-20 justify-around px-4 md:px-8 lg:px-0">
      <div className="mx-4 md:mx-10 lg:mx-20 mb-6 md:mb-0">
        <img className="bg-yellow-50 w-full md:w-auto" src={Pic1} alt="" />
      </div>
      <div className="flex flex-col gap-6 md:gap-10">
        <h2 className="font-bold text-amber-600 text-xl md:text-2xl">Know About Us</h2>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
          The Future of Mobile Software Unleash Your Mobile
        </h1>

        <span className="flex flex-col gap-4">
          <p className="text-base md:text-lg leading-relaxed max-w-2xl">
            Et purus duis sollicitudin dign habitant. Egestas nulla quis
            venenatis cras sed eu massa eu faucibus Urna fusce Et purus duis
            sollicitudin dignissim habitant. Egestas nulla quis venenatis
          </p>
          <span className="flex">
            <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" />
            <p className="px-3 font-bold text-sm md:text-base">
              Et purus duis sollicitudin dignissim habitant
            </p>
          </span>
          <span className="flex">
            <img className="w-5 h-5 flex-shrink-0" src={Check} alt="" />
            <p className="px-3 font-bold text-sm md:text-base">
              venenatis cras sed eu massa eu faucibus uis
            </p>
          </span>
        </span>
      </div>
    </div>
  );
}
