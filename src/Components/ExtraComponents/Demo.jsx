// @ts-nocheck
import React from "react";
import sign from "../../assets/sign.png";
import { Player } from "@lottiefiles/react-lottie-player";
import plantAnimation from "../../assets/Animation - 1747827768257.json";

import { Typewriter } from "react-simple-typewriter";

const Demo = () => {
  return (
    <div className="bg-green-50 py-16 px-4 md:px-8 relative">
      <div className="max-w-3xl mx-auto text-center relative mt-10">
        {/* First Lottie Animation Positioned Top-Right */}
        <div className="absolute -top-10  z-30 w-40 h-40 md:w-32 md:h-32 pointer-events-none">
          <Player
            autoplay
            loop
            src={plantAnimation}
            className="w-full h-full"
          />
        </div>
        {/* Typewriter effect in heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
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

        {/* Second Lottie Animation Positioned a bit left of the first one */}
        <div className="absolute -top-10 -right-10 z-30 w-40 h-40 md:w-32 md:h-32 pointer-events-none">
          <Player
            autoplay
            loop
            src={plantAnimation}
            className="w-full h-full"
          />
        </div>

        <h3 className="text-xl md:text-2xl text-green-700 font-medium mb-6">
          We are passionate about creating the perfect landscape of your dreams
        </h3>

        <p className="text-gray-700 mb-8 leading-relaxed">
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
