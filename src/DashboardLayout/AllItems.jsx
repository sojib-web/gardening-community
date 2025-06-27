// src/Dashboard/AllItems.jsx
import React from "react";
import { useLoaderData } from "react-router";

const AllItems = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold pb-2 text-green-700 mb-8 border-b-2 border-lime-400">
        📋 All Items {data.length}
      </h1>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-green-600 text-white uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th> {/* Serial Number */}
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y divide-gray-200">
            {data.map((item, idx) => (
              <tr
                key={item.id}
                className="hover:bg-green-50 transition duration-200"
              >
                <td className="px-6 py-4 font-medium">{idx + 1}</td>{" "}
                {/* Start from 1 */}
                <td className="px-6 py-4">
                  <img
                    src={item.imageUrl || "https://via.placeholder.com/60"}
                    alt={item.title}
                    className="w-14 h-14 rounded object-cover border"
                  />
                </td>
                <td className="px-6 py-4 text-green-800 font-semibold">
                  {item.title}
                </td>
                <td className="px-6 py-4">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
