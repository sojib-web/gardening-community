// @ts-nocheck
import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import GardenerCard from "./GardenerCard";
import { DarkModeContext } from "../../Context/DarkModeContext";

const GardenersList = () => {
  const gardeners = useLoaderData();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`min-h-screen py-16 px-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"
      }`}
    >
      <h2
        className={`text-5xl font-extrabold text-center mb-16 tracking-wide ${
          darkMode ? "text-lime-400" : ""
        }`}
      >
        🌿 Explore Gardeners
      </h2>

      <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gardeners.map((gardener) => (
          <GardenerCard
            key={gardener._id}
            gardener={gardener}
            darkMode={darkMode}
          />
        ))}
      </div>
    </section>
  );
};

export default GardenersList;
