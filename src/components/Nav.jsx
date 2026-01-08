import { useState } from "react";
import Logo from "../assets/sobtech logo.svg";
import { Menu, X } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex flex-row sticky top-0 z-50 bg-white">
        <ul className="flex flex-row px-4 md:px-10 lg:px-40 w-full items-center justify-between">
          <li className="px-2 md:px-4">
            <img className="py-4 md:py-7 w-24 md:w-auto" src={Logo} alt="" />
          </li>
          <div className="hidden lg:flex flex-row items-center">
            <li className="px-4 py-10 font-medium relative">
              <a
                className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-12 before:transition-all hover:before:duration-500"
                href=""
              >
                Home
              </a>
            </li>
            <li className="px-4 py-10 font-medium">
              <a
                className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-17 before:transition-all hover:before:duration-500"
                href=""
              >
                About us
              </a>
            </li>
            <li className="px-4 py-10 font-medium">
              <a
                className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-15 before:transition-all hover:before:duration-500"
                href=""
              >
                Services
              </a>
            </li>
            <li className="px-4 py-10 font-medium">
              <a
                className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-15 before:transition-all hover:before:duration-500"
                href=""
              >
                Projects
              </a>
            </li>
            <li className="px-4 py-10 font-medium">
              <a
                className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-11 before:transition-all hover:before:duration-500"
                href=""
              >
                Blogs
              </a>
            </li>
            <li className="px-4 py-10 font-medium">
              <a
                className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-12 before:transition-all hover:before:duration-500"
                href=""
              >
                Pages
              </a>
            </li>
            <li className="px-4 py-10 font-medium">
              <a
                className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-15 before:transition-all hover:before:duration-500"
                href=""
              >
                Contact
              </a>
            </li>
          </div>
          <div className="mx-4 hidden lg:block">
            <ul className="flex gap-5">
              <li>
                <button
                  className="relative z-30 overflow-hidden border-2 border-amber-600 px-4 py-5 my-5 font-medium rounded-4xl cursor-pointer 
                    text-amber-600 transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-amber-500 before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    after:absolute after:top-0 after:left-0 after:w-full after:bg-amber-600 after:h-0 after:transition-all after:duration-500 after:delay-200
                    hover:after:h-full after:z-20
                    hover:text-white"
                >
                  <span className="relative z-30">Login</span>
                </button>
              </li>
              <li>
                <button
                  className="
                    relative overflow-hidden border-2 border-amber-600 bg-amber-600 text-white 
                    px-5 py-5 my-5 font-medium rounded-4xl cursor-pointer 
                    transition-all duration-300 hover:text-black hover:bg-white

                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full 
                    before:bg-amber-500 before:transition-all before:duration-300 before:z-10 
                    hover:before:h-full

                    after:absolute after:top-0 after:left-0 after:w-full after:h-0 
                    after:bg-white after:transition-all after:duration-500 after:delay-200 after:z-20
                    hover:after:h-full
                  "
                >
                  <span className="relative z-30">Sign Up</span>
                </button>
              </li>
            </ul>
          </div>
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </ul>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-50">
            <ul className="flex flex-col p-4">
              <li className="px-4 py-3 font-medium border-b">
                <a href="">Home</a>
              </li>
              <li className="px-4 py-3 font-medium border-b">
                <a href="">About us</a>
              </li>
              <li className="px-4 py-3 font-medium border-b">
                <a href="">Services</a>
              </li>
              <li className="px-4 py-3 font-medium border-b">
                <a href="">Projects</a>
              </li>
              <li className="px-4 py-3 font-medium border-b">
                <a href="">Blogs</a>
              </li>
              <li className="px-4 py-3 font-medium border-b">
                <a href="">Pages</a>
              </li>
              <li className="px-4 py-3 font-medium border-b">
                <a href="">Contact</a>
              </li>
              <li className="px-4 py-3">
                <button
                  className="w-full relative z-30 overflow-hidden border-2 border-amber-600 px-4 py-3 font-medium rounded-4xl cursor-pointer 
                    text-amber-600 transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-amber-500 before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    after:absolute after:top-0 after:left-0 after:w-full after:bg-amber-600 after:h-0 after:transition-all after:duration-500 after:delay-200
                    hover:after:h-full after:z-20
                    hover:text-white"
                >
                  <span className="relative z-30">Login</span>
                </button>
              </li>
              <li className="px-4 py-3">
                <button
                  className="w-full relative overflow-hidden border-2 border-amber-600 bg-amber-600 text-white 
                    px-5 py-3 font-medium rounded-4xl cursor-pointer 
                    transition-all duration-300 hover:text-black hover:bg-white

                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full 
                    before:bg-amber-500 before:transition-all before:duration-300 before:z-10 
                    hover:before:h-full

                    after:absolute after:top-0 after:left-0 after:w-full after:h-0 
                    after:bg-white after:transition-all after:duration-500 after:delay-200 after:z-20
                    hover:after:h-full"
                >
                  <span className="relative z-30">Sign Up</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
