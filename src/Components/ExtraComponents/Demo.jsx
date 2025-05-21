// @ts-nocheck
import React from "react";
import sign from "../../assets/sign.png";

const Demo = () => {
  return (
    <div className="bg-green-50 py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
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
        <div className="flex justify-center">
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
