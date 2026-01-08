import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Bg from "../assets/video-thumb.png";
import Person from "../assets/download.png";
import Comma from "../assets/comma.svg";

export default function App() {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className="relative h-[400px] md:h-[600px] lg:h-screen bg-cover bg-center"
    >
      <div className="absolute bottom-0 left-4 md:left-20 lg:left-60 max-w-full md:max-w-[900px] max-h-[250px] md:max-h-[300px] flex px-4 md:px-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative flex flex-col md:flex-row">
              <div className="bg-[#F7F7F7] flex flex-col rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none">
                <p className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base lg:text-[20px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque maxime praesentium quia rem fuga deserunt sit ullam.
                  Atque iusto fugiat amet? Accusantium enim natus, id hic porro
                  aliquid cum labore?
                </p>
                <p className="px-4 md:px-8 py-3 md:py-6 font-bold text-base md:text-lg lg:text-[20px]">
                  Ronald Richards
                </p>
                <p className="px-4 md:px-8 pb-4 md:pb-0 text-sm md:text-base lg:text-[20px]">Web Designer</p>
                <div className="left-138 bottom-45 relative bg-white w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto md:mx-0 md:absolute md:left-32 md:bottom-8">
                  <img
                    className="absolute right-2 md:right-4 top-2 md:top-4 size-10 md:size-15"
                    src={Comma}
                    alt=""
                  />
                </div>
              </div>
              <img src={Person} alt="" className="hidden md:block w-full md:w-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col md:flex-row">
              <div className="bg-[#F7F7F7] flex flex-col rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none">
                <p className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base lg:text-[20px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque maxime praesentium quia rem fuga deserunt sit ullam.
                  Atque iusto fugiat amet? Accusantium enim natus, id hic porro
                  aliquid cum labore?
                </p>
                <p className="px-4 md:px-8 py-3 md:py-6 font-bold text-base md:text-lg lg:text-[20px]">
                  Ronald Richards
                </p>
                <p className="px-4 md:px-8 pb-4 md:pb-0 text-sm md:text-base lg:text-[20px]">Web Designer</p>
                <div className="left-138 bottom-45 relative bg-white w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto md:mx-0 md:absolute md:left-32 md:bottom-8">
                  <img
                    className="absolute right-2 md:right-4 top-2 md:top-4 size-10 md:size-15"
                    src={Comma}
                    alt=""
                  />
                </div>
              </div>
              <img src={Person} alt="" className="hidden md:block w-full md:w-auto" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col md:flex-row">
              <div className="bg-[#F7F7F7] flex flex-col rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none">
                <p className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base lg:text-[20px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque maxime praesentium quia rem fuga deserunt sit ullam.
                  Atque iusto fugiat amet? Accusantium enim natus, id hic porro
                  aliquid cum labore?
                </p>
                <p className="px-4 md:px-8 py-3 md:py-6 font-bold text-base md:text-lg lg:text-[20px]">
                  Ronald Richards
                </p>
                <p className="px-4 md:px-8 pb-4 md:pb-0 text-sm md:text-base lg:text-[20px]">Web Designer</p>
                <div className="left-138 bottom-45 relative bg-white w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto md:mx-0 md:absolute md:left-32 md:bottom-8">
                  <img
                    className="absolute right-2 md:right-4 top-2 md:top-4 size-10 md:size-15"
                    src={Comma}
                    alt=""
                  />
                </div>
              </div>
              <img src={Person} alt="" className="hidden md:block w-full md:w-auto" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
