import Person from "../assets/person.png";

export default function App() {
  return (
    <div className="px-4 md:px-8 lg:px-0">
      <div className="flex flex-col text-center py-4 md:py-8">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-light">Revolutionize Your Mobile </h1>
        <span className="font-extrabold text-3xl md:text-5xl lg:text-7xl">with State Software</span>
      </div>
      <div className="relative flex justify-center items-center py-4 md:py-8">
        <div className="absolute bg-amber-600 rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] -z-10"></div>

        <img src={Person} alt="Person" className="w-[200px] md:w-[300px] lg:w-[400px] relative z-10" />
      </div>
    </div>
  );
}
