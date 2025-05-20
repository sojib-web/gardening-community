import React from "react";
import { Link } from "react-router";

const dummyTips = [
  {
    _id: "1",
    title: "Indoor Tomato Tips",
    category: "Plant Care",
    availability: "Public",
    image: "https://i.ibb.co/album/indoor.jpg",
  },
  {
    _id: "2",
    title: "DIY Compost Hack",
    category: "Composting",
    availability: "Hidden",
    image: "https://i.ibb.co/album/compost.jpg",
  },
];

const MyTips = () => {
  const handleDelete = (id) => {
    const confirmed = confirm("Are you sure you want to delete this tip?");
    if (confirmed) {
      console.log("Deleted Tip ID:", id); // later: axios.delete()
    }
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
            {dummyTips.map((tip) => (
              <tr key={tip._id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>
                <td className="p-3">{tip.title}</td>
                <td className="p-3">{tip.category}</td>
                <td className="p-3">{tip.availability}</td>
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
