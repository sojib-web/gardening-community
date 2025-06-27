// @ts-nocheck
import React, { useState, useContext } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { DarkModeContext } from "../../Context/DarkModeContext";

const MyTips = () => {
  const loadedTips = useLoaderData();
  const [myTipsData, setMyTipsData] = useState(loadedTips);
  const { darkMode } = useContext(DarkModeContext);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This tip will be removed permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/share-garden-tip/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyTipsData((prev) => prev.filter((tip) => tip._id !== _id));
              Swal.fire("Deleted!", "Your tip has been deleted.", "success");
            }
          })
          .catch(() => {
            Swal.fire("Error", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      <section
        className={`max-w-7xl mx-auto px-4 py-10 min-h-screen transition duration-300 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <h2
          className={`text-3xl font-bold text-center mb-8 ${
            darkMode ? "text-lime-400" : "text-green-700"
          }`}
        >
          🌱 My Shared Garden Tips
        </h2>

        {myTipsData.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No tips found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {myTipsData.map((tip) => (
              <div
                key={tip._id}
                className={`rounded-xl shadow-md overflow-hidden hover:shadow-xl transition ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 space-y-1">
                  <h3
                    className={`text-lg font-semibold ${
                      darkMode ? "text-lime-300" : "text-green-700"
                    }`}
                  >
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {tip.category} • {tip.plantType} • {tip.difficulty}
                  </p>

                  <p className="text-sm">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        tip.availability === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {tip.availability}
                    </span>
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <Link
                      to={`/update-tip/${tip._id}`}
                      className="text-sm px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(tip._id)}
                      className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyTips;
