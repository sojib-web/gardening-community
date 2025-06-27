import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Overview = () => {
  const { tips, items } = useLoaderData();
  const { user } = useContext(AuthContext);

  // ধরো তোমার ইউজারের আইটেম ফিল্টার করতে চাও:
  const myItems = items.filter((item) => item.email === user?.email);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6 sm:mb-8 border-b-2 border-lime-400 pb-3 sm:pb-4 text-center md:text-left">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500 flex flex-col items-center sm:items-start">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Total Tips
          </h2>
          <p className="text-4xl font-bold text-green-600">{tips.length}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500 flex flex-col items-center sm:items-start">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">My Items</h2>
          <p className="text-4xl font-bold text-blue-600">{items.length}</p>
        </div>
      </div>

      {/* Logged In User Info */}
      {user && (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 sm:mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center sm:text-left">
            Logged In User
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={user.photoURL || "https://via.placeholder.com/80"}
              alt={user.displayName}
              className="w-16 h-16 rounded-full border"
            />
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Name: {user.displayName}</p>
              <p className="text-sm text-gray-600">Email: {user.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
