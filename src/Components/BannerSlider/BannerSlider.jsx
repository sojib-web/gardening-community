import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../assets/bg-image.jpg";
import image2 from "../../assets/bg-image2.jpg";
import image3 from "../../assets/bg-image 3.jpg";

import sideImage1 from "../../assets/banner 2.png";
import sideImage2 from "../../assets/banner.png";
import sideImage3 from "../../assets/banner3.png";

const slides = [
  {
    id: 1,
    title: "Find Professional GREEN GARDENER",
    buttonText: "Contact Now",
    buttonLink: "/contact",
    bgImage: image1,
    sideImage: sideImage1,
  },
  {
    id: 2,
    title: "Urban Gardening Made Simple",
    buttonText: "Join Us",
    buttonLink: "/register",
    bgImage: image2,
    sideImage: sideImage2,
  },
  {
    id: 3,
    title: "Your Green Journey Starts Here",
    buttonText: "Explore Tips",
    buttonLink: "/resources",
    bgImage: image3,
    sideImage: sideImage3,
  },
];

const BannerSlider = () => {
  return (
    <div className="w-full h-[65vh] md:h-[85vh] overflow-hidden relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#064e3b]/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 w-full px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full max-w-7xl mx-auto gap-8">
                  {/* Left - Animated Text Block with custom rounded corners */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-md p-8 
                      rounded-tl-[80px] rounded-br-[80px] 
                      rounded-tr-md rounded-bl-md 
                      space-y-6 shadow-lg"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={slide.buttonLink}
                      className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition"
                    >
                      {slide.buttonText}
                    </motion.a>
                  </motion.div>

                  {/* Right - Animated Image */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mt-6 md:mt-0"
                  >
                    <img
                      src={slide.sideImage}
                      alt="Gardener"
                      className="w-full max-w-[360px] md:max-w-[480px] object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Dots Styling */}
      <style jsx="true">{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #22c55e; /* Tailwind green-500 */
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
