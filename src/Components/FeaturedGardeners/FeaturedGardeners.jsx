import React from "react";
import { Link } from "react-router";

const FeaturedGardeners = ({ gardeningData }) => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-white text-center mb-12">
        🌿 Our Gardening Campaigns
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {gardeningData.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden rounded-xl mb-4">
              <img
                src={gardener.profilePic}
                alt={gardener.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-green-800 mb-2">
              {gardener.name}
            </h3>

            <p className="text-sm text-gray-600 flex-grow">
              {gardener.bio.length > 80
                ? gardener.bio.slice(0, 80) + "..."
                : gardener.bio}
            </p>

            {/* Button */}
            <Link
              to={`/campaign/${gardener._id}`}
              className="mt-4 inline-block bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 text-center"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardeners;
