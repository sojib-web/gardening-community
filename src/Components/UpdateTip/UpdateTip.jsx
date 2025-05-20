import React, { useState } from "react";

const dummyTip = {
  title: "Indoor Tomato Tips",
  topic: "Tomato",
  difficulty: "Easy",
  description:
    "Grow tomatoes inside your apartment with sunlight and grow lights.",
  image: "https://i.ibb.co/album/indoor.jpg",
  category: "Plant Care",
  availability: "Public",
  userName: "John Doe",
  userEmail: "john@example.com",
};

const UpdateTip = () => {
  const [formData, setFormData] = useState(dummyTip);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Tip:", formData); // later: axios.put()
    alert("✅ Tip updated successfully!");
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md my-10">
      <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
        ✏️ Update Tip
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Plant Type / Topic"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        >
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
        </select>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        >
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.userName}
            readOnly
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
          />
          <input
            type="email"
            value={formData.userEmail}
            readOnly
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700"
        >
          Update Tip
        </button>
      </form>
    </section>
  );
};

export default UpdateTip;
