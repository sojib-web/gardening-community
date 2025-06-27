// @ts-nocheck
import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { DarkModeContext } from "../../Context/DarkModeContext";

const GardenerDetails = () => {
  const gardener = useLoaderData();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      <div
        className={`max-w-4xl mx-auto p-6 rounded-xl shadow0 transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Profile Image */}
        <img
          src={gardener.profilePic}
          alt={gardener.name}
          className="w-full rounded-xl mb-6 shadow-md"
        />

        {/* Name & Bio */}
        <h2
          className={`text-3xl font-bold mb-2 ${
            darkMode ? "text-lime-400" : "text-green-700"
          }`}
        >
          {gardener.name}
        </h2>
        <p
          className={`text-lg mb-4 italic ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {gardener.bio}
        </p>

        {/* Gardener Info */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-sm ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p>
            <span className="font-semibold">Age:</span> {gardener.age}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {gardener.gender}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {gardener.status}
          </p>
          <p>
            <span className="font-semibold">Total Tips Shared:</span>{" "}
            {gardener.totalTips}
          </p>
          <p>
            <span className="font-semibold">Experience:</span>{" "}
            {gardener.experiences}
          </p>
          <p>
            <span className="font-semibold">Other Info:</span>{" "}
            {gardener.otherInfo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GardenerDetails;
