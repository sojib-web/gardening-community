import React from "react";

const tips = [
  {
    id: 1,
    title: "Water your plants early in the morning",
    description:
      "Watering early reduces evaporation and helps plants absorb more moisture.",
  },
  {
    id: 2,
    title: "Use compost for better soil health",
    description:
      "Compost enriches soil with essential nutrients and improves moisture retention.",
  },
  {
    id: 3,
    title: "Prune dead leaves regularly",
    description: "Removing dead leaves prevents pests and promotes new growth.",
  },
  {
    id: 4,
    title: "Rotate plants to ensure even sunlight",
    description:
      "Rotating plants helps them grow evenly by receiving balanced sunlight.",
  },
  {
    id: 5,
    title: "Mulch your garden beds",
    description: "Mulching helps retain soil moisture and suppress weeds.",
  },
  {
    id: 6,
    title: "Use natural pest repellents",
    description:
      "Natural repellents keep your garden safe from harmful insects without chemicals.",
  },
];

const TopTrendingTips = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        🌟 Top Trending Tips
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-green-50 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              {tip.title}
            </h3>
            <p className="text-green-700 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingTips;
