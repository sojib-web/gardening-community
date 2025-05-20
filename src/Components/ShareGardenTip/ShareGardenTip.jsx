import React from "react";

const ShareGardenTip = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 my-10 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        🌿 Share a Garden Tip
      </h2>

      <form className="space-y-4">
        {/* Title */}
        <input
          type="text"
          placeholder="e.g., How I Grow Tomatoes Indoors"
          className="w-full p-3 border border-gray-300 rounded"
        />

        {/* Topic */}
        <input
          type="text"
          placeholder="Plant Type / Topic"
          className="w-full p-3 border border-gray-300 rounded"
        />

        {/* Difficulty */}
        <select className="w-full p-3 border border-gray-300 rounded">
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        {/* Description */}
        <textarea
          placeholder="Write your tip in detail..."
          className="w-full p-3 border border-gray-300 rounded"
          rows={5}
        ></textarea>

        {/* Image URL */}
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-3 border border-gray-300 rounded"
        />

        {/* Category */}
        <select className="w-full p-3 border border-gray-300 rounded">
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Organic Gardening</option>
        </select>

        {/* Availability */}
        <select className="w-full p-3 border border-gray-300 rounded">
          <option>Public</option>
          <option>Hidden</option>
        </select>

        {/* Read-only user info */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value="John Doe"
            readOnly
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
          />
          <input
            type="email"
            value="john@example.com"
            readOnly
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700"
        >
          Submit Tip
        </button>
      </form>
    </section>
  );
};

export default ShareGardenTip;
