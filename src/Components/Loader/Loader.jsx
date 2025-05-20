import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-green-500 border-b-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-l-green-400 border-r-transparent animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Loader;
