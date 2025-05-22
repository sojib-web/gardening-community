import React from "react";
import { Link } from "react-router";

import image from "../../assets/notFound.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <img
        src={image}
        alt="404 Not Found"
        className="w-72 md:w-[400px] lg:w-[450px] mb-6"
      />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Sorry, we can’t find that page!
      </h2>
      <p className="text-gray-500 mt-2 mb-6">
        The page you are looking for was moved, removed, renamed or never
        existed.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
