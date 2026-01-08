import { CirclePlus } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly py-8 md:py-15 px-4 md:px-8 lg:px-20 gap-8 md:gap-0">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-amber-600 font-bold text-base md:text-[20px]">
          FAQ
        </h2>
        <span>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-[40px] flex-wrap ">
            Navigate the Digital World
          </h1>
          <p className="font-bold text-2xl md:text-3xl lg:text-[40px] flex-wrap">
            {" "}
            with Confidence
          </p>
        </span>
        <p className="font-light text-sm md:text-base">
          Aliquam eros justo, posuere loborti laorematullamcorper the posuer
          viverra.
        </p>
        <div className="bg-[#FFFAF0] flex w-full md:w-[300px] rounded-2xl">
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl px-4 md:px-8 py-6 md:py-8">
            10+
          </h1>
          <p className="flex flex-col opacity-60 py-6 md:py-8">
            <p className="px-2 md:px-3 text-sm md:text-base">years of</p>
            <span className="px-2 md:px-3 text-sm md:text-base">
              {" "}
              experience
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-20">
        <details>
          <summary className="flex bg-[#FFFAF0] px-4 md:px-5 py-4 md:py-5 border-b-black border-2 rounded-2xl list-none cursor-pointer text-sm md:text-base">
            <p className="px-3">What is physical therapy?</p>
          </summary>
          <p className="flex flex-col flex-wrap bg-[#FBFBFB] px-4 md:px-5 py-4 md:py-5 text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            <span>
              the readable content of a page when looking at its layout. The
              point
            </span>
            <span>
              of using Lorem Ipsum is that it has a more-or-less normal
            </span>
            <span>
              distribution of letters, as opposed to making up random text.
            </span>
          </p>
        </details>
        <details>
          <summary className="flex bg-[#FFFAF0] px-4 md:px-5 py-4 md:py-5 border-b-black border-2 rounded-2xl list-none cursor-pointer text-sm md:text-base">
            <p className="px-3">
              What is conditions can physical therapy treat?
            </p>
          </summary>
          <p className="flex flex-col flex-wrap bg-[#FBFBFB] px-4 md:px-5 py-4 md:py-5 text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            <span>
              the readable content of a page when looking at its layout. The
              point
            </span>
            <span>
              of using Lorem Ipsum is that it has a more-or-less normal
            </span>
            <span>
              distribution of letters, as opposed to making up random text.
            </span>
          </p>
        </details>
        <details>
          <summary className="flex bg-[#FFFAF0] px-4 md:px-5 py-4 md:py-5 border-b-black border-2 rounded-2xl list-none cursor-pointer text-sm md:text-base">
            <p className="px-3">Is physical therapy painful?</p>
          </summary>
          <p className="flex flex-col flex-wrap bg-[#FBFBFB] px-4 md:px-5 py-4 md:py-5 text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            <span>
              the readable content of a page when looking at its layout. The
              point
            </span>
            <span>
              of using Lorem Ipsum is that it has a more-or-less normal
            </span>
            <span>
              distribution of letters, as opposed to making up random text.
            </span>
          </p>
        </details>
      </div>
    </div>
  );
}
