import React, { useContext } from "react";
import { Link } from "react-router";
import { DarkModeContext } from "../../Context/DarkModeContext";
import image from "../../assets/notFound.png";

const NotFound = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center px-4 text-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <img
        src={image}
        alt="404 Not Found"
        className="w-72 md:w-[400px] lg:w-[450px] mb-6 drop-shadow-lg"
      />
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Sorry, we can’t find that page!
      </h2>
      <p className="text-base md:text-lg mb-6 text-gray-500 dark:text-gray-300">
        The page you are looking for was moved, removed, renamed or never
        existed.
      </p>

      <Link
        to="/"
        className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md transition"
      >
        ⬅️ Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
