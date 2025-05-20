import React from "react";

const gardeningTools = [
  {
    id: 1,
    name: "Pruning Shears",
    description: "Perfect for trimming and shaping plants.",
    icon: "✂️",
  },
  {
    id: 2,
    name: "Garden Trowel",
    description: "Ideal for digging small holes and planting.",
    icon: "🛠️",
  },
  {
    id: 3,
    name: "Watering Can",
    description: "Helps in even watering of plants.",
    icon: "💧",
  },
  {
    id: 4,
    name: "Garden Gloves",
    description: "Protect your hands while gardening.",
    icon: "🧤",
  },
];

const GardeningTools = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        🛠️ Essential Gardening Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {gardeningTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-green-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-5xl mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              {tool.name}
            </h3>
            <p className="text-green-700 text-sm">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GardeningTools;
