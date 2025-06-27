// @ts-nocheck
import React, { useContext } from "react";
import iamge1 from "../../assets/group2.jpg";
import iamge2 from "../../assets/Image3.jpg";
import iamge3 from "../../assets/cardIamge.jpg";
import { DarkModeContext } from "../../Context/DarkModeContext";

const GardeningTools = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h2
        className={`text-3xl font-bold text-center mb-8 ${
          darkMode ? "text-lime-400" : "text-green-800"
        }`}
      >
        🌿 Discover the Best Gardening Tools for Every Season
      </h2>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="relative flex-1 grid grid-cols-1 gap-6">
          {/* Experience */}
          <div className="mt-6 flex gap-5 items-center">
            <div className="w-48 h-32 rounded-xl overflow-hidden shadow-md">
              <img
                src={iamge1}
                alt="Mower"
                className="w-full h-full object-cover"
              />
            </div>
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-lime-300" : "text-green-700"
              }`}
            >
              25
              <span className={darkMode ? "text-gray-300" : "text-black"}>
                +
              </span>
              <p
                className={`text-lg font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Years Of Experience
              </p>
            </h2>
          </div>

          {/* Plant vector positioned over the image */}
          <div className="relative flex gap-5">
            {/* Left Small Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={iamge2}
                alt="Plant"
                className="w-50 h-full object-cover"
              />
            </div>

            {/* Right Large Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={iamge3}
                alt="Gardener"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6">
          <h4
            className={`font-semibold flex items-center gap-2 ${
              darkMode ? "text-lime-400" : "text-green-600"
            }`}
          >
            <i className="fa-solid fa-leaf text-xl"></i> About Gardening
          </h4>
          <h2
            className={`text-4xl font-bold leading-snug ${
              darkMode ? "text-lime-300" : "text-green-900"
            }`}
          >
            We Care Your Garden <br /> & Landscaping
          </h2>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Sed ut perspiciatis unde omnis isnatu volunteer accusantium
            doloremque laudantium totam rem apeira eaque ipsa quae ab eillo
            inventore veritatis et quasi architecto beatae vitae.
          </p>
          <ul className="space-y-2">
            <li
              className={`flex items-center gap-2 ${
                darkMode ? "text-lime-300" : "text-green-700"
              }`}
            >
              <i className="fa-solid fa-check-circle text-green-500"></i>
              We’re Experience Gardening
            </li>
            <li
              className={`flex items-center gap-2 ${
                darkMode ? "text-lime-300" : "text-green-700"
              }`}
            >
              <i className="fa-solid fa-check-circle text-green-500"></i>
              We adapt your needs
            </li>
          </ul>
          <button className="btn btn-success text-white mt-4 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default GardeningTools;
