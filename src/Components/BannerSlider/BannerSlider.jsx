/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import sideImage1 from "../../assets/Image3.jpg";
import sideImage2 from "../../assets/cardIamge.jpg";
import sideImage3 from "../../assets/banner3.png";
import { DarkModeContext } from "../../Context/DarkModeContext";

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
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`relative px-4 md:px-12 lg:px-20 py-10 md:py-16 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-tr from-emerald-900 via-green-700 to-lime-500"
      }`}
    >
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
              <div
                className={`relative w-full flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-12 pb-16 rounded-3xl transition-colors duration-300 ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
                    : "bg-gradient-to-br from-green-900 via-green-800 to-green-600"
                }`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10 rounded-3xl" />

                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`relative z-20 flex-1 flex flex-col justify-center rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-lg ${
                    darkMode
                      ? "bg-gradient-to-r from-gray-800/90 via-gray-700/80 to-gray-900/90 text-white"
                      : "bg-gradient-to-r from-green-800/90 via-green-700/80 to-green-900/90 text-white"
                  }`}
                >
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={slide.buttonLink}
                    className={`inline-block transition font-semibold px-8 py-3 rounded-full shadow-lg ${
                      darkMode
                        ? "bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-400 hover:to-green-700 text-white"
                        : "bg-gradient-to-r from-lime-400 to-green-600 hover:from-lime-500 hover:to-green-700 text-white"
                    }`}
                  >
                    {slide.buttonText}
                  </motion.a>
                </motion.div>

                {/* Right Image */}
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
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <style>{`
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
