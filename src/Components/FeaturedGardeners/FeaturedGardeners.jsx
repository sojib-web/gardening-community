import React from "react";

const FeaturedGardeners = ({ gardeningData }) => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-green-800 text-center mb-12">
        🌿 Meet Our Featured Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {gardeningData.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-white border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300"
          >
            {/* Avatar */}
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-green-500 shadow-md">
              <img
                src={gardener.profilePic}
                alt={gardener.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
                {gardener.status}
              </span>
            </div>

            {/* Info */}
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold text-green-900">
                {gardener.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed px-2">
                {gardener.bio}
              </p>
            </div>

            {/* Divider */}
            <div className="mt-4 border-t border-gray-200 pt-4 text-center text-sm text-gray-400 italic">
              Garden Lover 🌱
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardeners;
