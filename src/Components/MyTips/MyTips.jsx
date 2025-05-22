// @ts-nocheck
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const loadedTips = useLoaderData();
  const [myTipsData, setMyTipsData] = useState(loadedTips);

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
              setMyTipsData((prevTips) =>
                prevTips.filter((tip) => tip._id !== _id)
              );
              Swal.fire("Deleted!", "Your tip has been deleted.", "success");
            }
          })
          .catch((err) => {
            console.error("Delete failed:", err);
            Swal.fire("Error", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">
        🌱 My Shared Garden Tips
      </h2>

      {myTipsData.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No tips found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {myTipsData.map((tip) => (
            <div
              key={tip._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={tip.imageUrl}
                alt={tip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Category: <span className="font-medium">{tip.category}</span>
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Status:{" "}
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      tip.availability === "Published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tip.availability}
                  </span>
                </p>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/update-tip/${tip._id}`}
                    className="text-sm px-4 py-2 bg-green-600  text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    ✏️ Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="text-sm px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
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
  );
};

export default MyTips;
