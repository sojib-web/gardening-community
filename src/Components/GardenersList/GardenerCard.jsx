import React from "react";

const GardenerCard = ({ gardener }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center">
      <div className="w-32 h-32 mb-5 rounded-full overflow-hidden border-4 border-green-400 shadow-md">
        <img
          src={gardener.profilePic}
          alt={gardener.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-2xl font-bold text-green-800 mb-2">
        {gardener.name}
      </h3>
      <p className="text-gray-600 font-semibold mb-1">
        Age: <span className="text-green-600">{gardener.age}</span> | Gender:{" "}
        <span className="text-green-600">{gardener.gender}</span>
      </p>
      <p className="text-sm text-white bg-green-600 px-3 py-1 rounded-full font-semibold mb-3 uppercase tracking-wide shadow-sm">
        {gardener.status}
      </p>

      <p className="text-gray-700 italic mb-2">{gardener.experiences}</p>
      <p className="text-green-700 font-semibold mb-3">
        Total Shared Tips: {gardener.totalTips}
      </p>
      <p className="text-gray-500 text-sm">{gardener.otherInfo}</p>
    </div>
  );
};

export default GardenerCard;
