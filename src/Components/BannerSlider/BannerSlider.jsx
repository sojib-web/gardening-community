// @ts-nocheck
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import "swiper/css";
import "swiper/css/pagination";

import sideImage1 from "../../assets/Image3.jpg";
import sideImage2 from "../../assets/cardIamge.jpg";
import sideImage3 from "../../assets/banner3.png";
import plantAnimation from "../../assets/Animation - 1747825947923.json"; // Lottie animation JSON

const slides = [
  {
    id: 1,
    title: "Find Professional GREEN GARDENER",
    buttonText: "Contact Now",
    buttonLink: "/contact",
    sideImage: sideImage1,
  },
  {
    id: 2,
    title: "Urban Gardening Made Simple",
    buttonText: "Join Us",
    buttonLink: "/register",
    sideImage: sideImage2,
  },
  {
    id: 3,
    title: "Your Green Journey Starts Here",
    buttonText: "Explore Tips",
    buttonLink: "/resources",
    sideImage: sideImage3,
  },
];

const BannerSlider = () => {
  return (
    <section className="relative px-4 md:px-12 lg:px-20 py-10 md:py-16 bg-gradient-to-tr from-emerald-900 via-green-700 to-lime-500">
      <div className="mx-auto relative overflow-hidden rounded-3xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          className="h-full min-h-[480px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-12 pb-16 bg-gradient-to-br from-green-900 via-green-800 to-green-600 rounded-3xl">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10 rounded-3xl" />

                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-20 flex-1 text-white flex flex-col justify-center rounded-2xl 
                    bg-gradient-to-r from-green-800/90 via-green-700/80 to-green-900/90 shadow-lg backdrop-blur-sm p-6 md:p-10"
                >
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={slide.buttonLink}
                    className="inline-block bg-gradient-to-r from-lime-400 to-green-600 hover:from-lime-500 hover:to-green-700 
                      transition text-white font-semibold px-8 py-3 rounded-full shadow-lg"
                  >
                    {slide.buttonText}
                  </motion.a>
                </motion.div>

                {/* Right Image with Lottie */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-20 flex-1 flex justify-center items-center"
                >
                  <div className="relative w-60 md:w-80 lg:w-96">
                    <img
                      src={slide.sideImage}
                      alt="Gardener Illustration"
                      className="w-full h-auto rounded-2xl drop-shadow-2xl object-contain"
                    />
                    {/* Lottie Animation Positioned Top-Right */}
                    <div className="absolute top-0 right-0 z-30 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
                      <Player
                        autoplay
                        loop
                        src={plantAnimation}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <style jsx>{`
          .swiper-pagination-bullet {
            background: #a7f3d0;
            opacity: 0.6;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin: 0 6px !important;
            transition: all 0.3s ease;
            box-shadow: 0 0 6px #a7f3d0;
          }

          .swiper-pagination-bullet-active {
            background: #22c55e;
            opacity: 1;
            width: 14px;
            height: 14px;
            box-shadow: 0 0 10px #22c55e;
          }
        `}</style>
      </div>
    </section>
  );
};

export default BannerSlider;
