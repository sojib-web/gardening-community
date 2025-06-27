import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";

const MyItems = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto bg-gradient-to-tr from-white via-emerald-50 to-lime-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-green-700 mb-8 border-b-2 border-lime-400 pb-4">
        🧾 My Items {data.length}
      </h1>

      {data.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">No items found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">
                  #
                </th>
                <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">
                  Image
                </th>
                <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">
                  Title
                </th>
                <th className="py-4 px-6 text-left text-sm uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr
                  key={item.id || item._id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-lime-100 transition`}
                >
                  <td className="py-3 px-6 text-gray-800">{idx + 1}</td>
                  <td className="py-3 px-6">
                    <img
                      src={item.imageUrl || "https://via.placeholder.com/60"}
                      alt={item.title}
                      className="w-14 h-14 rounded object-cover border"
                    />
                  </td>
                  <td className="py-3 px-6 font-semibold text-green-700">
                    {item.title}
                  </td>
                  <td className="py-3 px-6 text-gray-700">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyItems;
