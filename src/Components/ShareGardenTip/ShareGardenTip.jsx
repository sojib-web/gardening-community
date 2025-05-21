import React, { useState } from "react";

const ShareGardenTip = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const ShareGardenTipSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tipData = Object.fromEntries(formData.entries());
    console.log(tipData);

    fetch(`http://localhost:3000/share-garden-tip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setSuccessMsg("Your garden tip was shared successfully!");
          form.reset();
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setSuccessMsg("Failed to share your tip. Please try again.");
      });
  };

  return (
    <section className="max-w-3xl mx-auto p-8 my-12 bg-gradient-to-tr from-green-50 to-green-100 rounded-2xl shadow-xl border border-green-300">
      <h2 className="text-4xl font-extrabold text-green-800 text-center mb-8 tracking-wide drop-shadow-md">
        🌿 Share a Garden Tip
      </h2>

      <form onSubmit={ShareGardenTipSubmit} className="space-y-6">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="e.g., How I Grow Tomatoes Indoors"
          className="w-full p-4 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-600 placeholder-green-700 text-green-900 shadow-sm transition"
          required
        />

        {/* Topic */}
        <input
          type="text"
          name="plantType"
          placeholder="Plant Type / Topic"
          className="w-full p-4 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-600 placeholder-green-700 text-green-900 shadow-sm transition"
          required
        />

        {/* Difficulty */}
        <select
          name="difficulty"
          className="w-full p-4 border-2 border-green-300 rounded-lg bg-white text-green-900 focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-600 shadow-sm transition"
          required
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Write your tip in detail..."
          className="w-full p-4 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-600 placeholder-green-700 text-green-900 shadow-sm transition resize-none"
          rows={5}
          required
        ></textarea>

        {/* Image URL */}
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          className="w-full p-4 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-600 placeholder-green-700 text-green-900 shadow-sm transition"
        />

        {/* Category */}
        <select
          name="category"
          className="w-full p-4 border-2 border-green-300 rounded-lg bg-white text-green-900 focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-600 shadow-sm transition"
          required
        >
          <option value="Composting">Composting</option>
          <option value="Plant Care">Plant Care</option>
          <option value="Vertical Gardening">Vertical Gardening</option>
          <option value="Organic Gardening">Organic Gardening</option>
        </select>

        {/* Availability */}
        <select
          name="availability"
          className="w-full p-4 border-2 border-green-300 rounded-lg bg-white text-green-900 focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-600 shadow-sm transition"
          required
        >
          <option value="Public">Public</option>
          <option value="Hidden">Hidden</option>
        </select>

        {/* Read-only user info */}
        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            name="userName"
            value="John Doe"
            readOnly
            className="w-full p-4 bg-green-100 border-2 border-green-300 rounded-lg text-green-700 font-semibold shadow-inner"
          />
          <input
            type="email"
            name="userEmail"
            value="john@example.com"
            readOnly
            className="w-full p-4 bg-green-100 border-2 border-green-300 rounded-lg text-green-700 font-semibold shadow-inner"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-green-700 text-white rounded-xl font-extrabold text-lg hover:bg-green-800 transition shadow-lg hover:shadow-xl"
        >
          Submit Tip
        </button>
      </form>

      {successMsg && (
        <p className="mt-6 text-center text-green-800 font-semibold text-lg">
          {successMsg}
        </p>
      )}
    </section>
  );
};

export default ShareGardenTip;
