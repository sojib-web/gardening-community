import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

const TopTrendingTips = ({ tips }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`max-w-6xl mx-auto py-14 px-4 transition-colors duration-300`}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-4xl font-bold mb-2 ${
            darkMode ? "text-lime-400" : "text-white"
          }`}
        >
          🌿 Top Trending Gardening Tips
        </h2>
        <p
          className={`text-sm max-w-xl mx-auto ${
            darkMode ? "text-gray-300" : "text-white"
          }`}
        >
          Discover the most effective gardening tips handpicked from expert
          gardeners to transform your outdoor space.
        </p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className={`rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300 group ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-lime-300" : "text-green-800"
                  }`}
                >
                  {tip.title}
                </h3>
                <span className="bg-green-600 text-white text-xs rounded px-2 py-0.5">
                  Tip
                </span>
              </div>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } text-sm`}
              >
                {tip.description}
              </p>
              <p className="text-sm text-right italic text-green-500">
                — {tip.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingTips;
