// @ts-nocheck
import React from "react";
import sign from "../../assets/sign.png";
import { Player } from "@lottiefiles/react-lottie-player";
import plantAnimation from "../../assets/Animation - 1747825947923.json"; // Lottie animation JSON

const Demo = () => {
  return (
    <div className="bg-green-50 py-16 px-4 md:px-8 relative">
      {" "}
      {/* Added relative here */}
      <div className="max-w-3xl mx-auto text-center relative">
        {" "}
        {/* Also relative here */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Welcome to Real Garden
        </h1>
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
    </div>
  );
};

export default Demo;
