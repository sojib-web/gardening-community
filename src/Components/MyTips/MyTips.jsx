import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {
  const loadedTips = useLoaderData();
  const [myTipsData, setMyTipsData] = useState(loadedTips);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        🌿 My Garden Tips
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded shadow">
          <thead>
            <tr className="bg-green-100 text-left text-green-800 font-semibold">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTipsData.map((tip) => (
              <tr key={tip._id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>
                <td className="p-3">{tip.title}</td>
                <td className="p-3">{tip.category}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold `}>
                    {tip.availability}
                  </span>
                </td>
                <td className="p-3 flex gap-2">
                  <Link
                    to={`/update-tip/${tip._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    ✏️ Update
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyTips;
