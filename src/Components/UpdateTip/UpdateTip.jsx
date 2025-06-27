import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateTip = () => {
  const tip = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: tip.title,
    category: tip.category,
    imageUrl: tip.imageUrl,
    description: tip.description,
    availability: tip.availability,
    userName: tip.userName,
    userEmail: tip.userEmail,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://gardening-community-server-plum.vercel.app/share-garden-tip/${tip._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success", "Tip updated successfully!", "success");
          navigate("/myTips");
        }
      })
      .catch(() => {
        Swal.fire("Error", "Something went wrong!", "error");
      });
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          ✏️ Update Garden Tip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Tip Title"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-600"
            required
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-600"
            required
          />

          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-lg shadow-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-600"
            required
          ></textarea>

          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-600"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="userName"
              value={formData.userName}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
            />
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-2 rounded-lg font-semibold shadow-md"
          >
            ✅ Update Tip
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateTip;
