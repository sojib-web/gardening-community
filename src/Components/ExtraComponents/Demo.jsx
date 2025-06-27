// @ts-nocheck
import React, { useContext } from "react";
import sign from "../../assets/sign.png";
import { Player } from "@lottiefiles/react-lottie-player";
import plantAnimation from "../../assets/Animation - 1747827768257.json";

import { Typewriter } from "react-simple-typewriter";
import { DarkModeContext } from "../../Context/DarkModeContext";

const Demo = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`py-16 px-4 md:px-8 relative transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-50 text-black"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center relative mt-10">
        {/* First Lottie Animation Positioned Top-Right */}
        <div className="absolute -top-10 z-30 w-40 h-40 md:w-32 md:h-32 pointer-events-none">
          <Player
            autoplay
            loop
            src={plantAnimation}
            className="w-full h-full"
          />
        </div>

        {/* Typewriter effect in heading */}
        <h1
          className={`text-sm lg:text-4xl md:text-3xl font-bold mb-4 ${
            darkMode ? "text-lime-400" : "text-green-800"
          }`}
        >
          <Typewriter
            words={["Welcome to Real Garden"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        {/* Second Lottie Animation Positioned right side */}
        <div className="absolute -top-10 -right-10 z-30 w-40 h-40 md:w-32 md:h-32 pointer-events-none">
          <Player
            autoplay
            loop
            src={plantAnimation}
            className="w-full h-full"
          />
        </div>

        <h3
          className={`text-sm md:text-2xl font-medium mb-6 ${
            darkMode ? "text-lime-300" : "text-green-700"
          }`}
        >
          We are passionate about creating the perfect landscape of your dreams
        </h3>

        <p
          className={`mb-8 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          “We provide exceptional landscaping services to a wide range of
          commercial and residential properties for over 35 years, including
          large corporate environments, city parks, shopping malls, and
          apartments. Our experienced landscapers make dreams come true.”
        </p>

        <div className="flex justify-center mb-8">
          <img
            src={sign}
            alt="Signature"
            className="h-20 object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
