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

    fetch(`http://localhost:3000/share-garden-tip/${tip._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
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
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        ✏️ Update Tip
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="input w-full"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="input w-full"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="input w-full"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea w-full"
          required
        ></textarea>

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="select w-full"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>

        <input
          type="text"
          name="userName"
          value={formData.userName}
          readOnly
          className="input w-full bg-gray-100"
        />
        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          readOnly
          className="input w-full bg-gray-100"
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          ✅ Update Tip
        </button>
      </form>
    </section>
  );
};

export default UpdateTip;
