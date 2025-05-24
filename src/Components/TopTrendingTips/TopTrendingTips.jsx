import React from "react";

const TopTrendingTips = ({ tips }) => {
  return (
    <div className="max-w-6xl mx-auto py-14 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">
          🌿 Top Trending Gardening Tips
        </h2>
        <p className="text-white text-sm max-w-xl mx-auto">
          Discover the most effective gardening tips handpicked from expert
          gardeners to transform your outdoor space.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="bg-white rounded-xl shadow-lg  hover:shadow-2xl hover:scale-[1.02] transition duration-300 group"
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
                <h3 className="text-xl font-semibold text-green-800">
                  {tip.title}
                </h3>
                <span className="badge badge-success text-white text-xs">
                  Tip
                </span>
              </div>
              <p className="text-sm text-gray-700">{tip.description}</p>
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
