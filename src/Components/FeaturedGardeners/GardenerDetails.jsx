// @ts-nocheck
import React from "react";
import { useLoaderData } from "react-router";

const GardenerDetails = () => {
  const gardener = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      {/* Profile Image */}
      <img
        src={gardener.profilePic}
        alt={gardener.name}
        className="w-full rounded-xl mb-6"
      />

      {/* Name & Bio */}
      <h2 className="text-3xl font-bold text-green-700 mb-2">
        {gardener.name}
      </h2>
      <p className="text-gray-700 text-lg mb-4 italic">{gardener.bio}</p>

      {/* Gardener Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
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
  );
};

export default GardenerDetails;
