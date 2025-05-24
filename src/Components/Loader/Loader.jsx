import React from "react";
import { FaLeaf } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4  text-green-400">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-green-500 border-t-black animate-spin"></div>
        <div className="absolute inset-4 flex justify-center items-center">
          <FaLeaf className="text-4xl animate-bounce text-green-400" />
        </div>
      </div>
      <p className="text-lg text-white font-semibold">Loading your garden...</p>
    </div>
  );
};

export default Loader;
