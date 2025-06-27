import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext"; // ✅ Import context

const GardenerCard = ({ gardener }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="w-32 h-32 mb-5 rounded-full overflow-hidden border-4 border-green-400 shadow-md">
        <img
          src={gardener.profilePic}
          alt={gardener.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3
        className={`text-2xl font-bold mb-2 ${
          darkMode ? "text-lime-300" : "text-green-800"
        }`}
      >
        {gardener.name}
      </h3>

      <p
        className={`font-semibold mb-1 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Age: <span className="text-green-500">{gardener.age}</span> | Gender:{" "}
        <span className="text-green-500">{gardener.gender}</span>
      </p>

      <p className="text-sm bg-green-600 text-white px-3 py-1 rounded-full font-semibold mb-3 uppercase tracking-wide shadow-sm">
        {gardener.status}
      </p>

      <p
        className={`italic mb-2 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {gardener.experiences}
      </p>

      <p className="text-green-500 font-semibold mb-3">
        Total Shared Tips: {gardener.totalTips}
      </p>

      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        {gardener.otherInfo}
      </p>
    </div>
  );
};

export default GardenerCard;
