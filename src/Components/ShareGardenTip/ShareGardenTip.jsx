import React, { useContext } from "react";
import Swal from "sweetalert2";
import { DarkModeContext } from "../../Context/DarkModeContext";

const ShareGardenTip = () => {
  const { darkMode } = useContext(DarkModeContext);

  const ShareGardenTipSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tipData = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/share-garden-tip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your garden tip was shared successfully!",
            confirmButtonColor: "#166534",
          });
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to share your tip. Please try again.",
          confirmButtonColor: "#b91c1c",
        });
      });
  };

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      <section
        className={`max-w-3xl mx-auto p-8  transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        } rounded-2xl shadow-lg`}
      >
        <h2
          className={`text-4xl font-extrabold text-center mb-8 tracking-wide drop-shadow-md ${
            darkMode ? "text-lime-400" : "text-green-800"
          }`}
        >
          🌿 Share a Garden Tip
        </h2>

        <form onSubmit={ShareGardenTipSubmit} className="space-y-6">
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="e.g., How I Grow Tomatoes Indoors"
            className={`w-full p-4 border-2 rounded-lg shadow-sm transition ${
              darkMode
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-lime-400 focus:border-lime-500"
                : "bg-white border-green-300 text-green-900 placeholder-green-700 focus:ring-green-400 focus:border-green-600"
            }`}
            required
          />

          {/* Topic */}
          <input
            type="text"
            name="plantType"
            placeholder="Plant Type / Topic"
            className={`w-full p-4 border-2 rounded-lg shadow-sm transition ${
              darkMode
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-lime-400 focus:border-lime-500"
                : "bg-white border-green-300 text-green-900 placeholder-green-700 focus:ring-green-400 focus:border-green-600"
            }`}
            required
          />

          {/* Difficulty */}
          <select
            name="difficulty"
            className={`w-full p-4 border-2 rounded-lg shadow-sm transition ${
              darkMode
                ? "bg-gray-800 border-gray-600 text-white focus:ring-lime-400 focus:border-lime-500"
                : "bg-white border-green-300 text-green-900 focus:ring-green-400 focus:border-green-600"
            }`}
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
            className={`w-full p-4 border-2 rounded-lg resize-none shadow-sm transition ${
              darkMode
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-lime-400 focus:border-lime-500"
                : "bg-white border-green-300 text-green-900 placeholder-green-700 focus:ring-green-400 focus:border-green-600"
            }`}
            rows={5}
            required
          ></textarea>

          {/* Image URL */}
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className={`w-full p-4 border-2 rounded-lg shadow-sm transition ${
              darkMode
                ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-lime-400 focus:border-lime-500"
                : "bg-white border-green-300 text-green-900 placeholder-green-700 focus:ring-green-400 focus:border-green-600"
            }`}
          />

          {/* Category */}
          <select
            name="category"
            className={`w-full p-4 border-2 rounded-lg shadow-sm transition ${
              darkMode
                ? "bg-gray-800 border-gray-600 text-white focus:ring-lime-400 focus:border-lime-500"
                : "bg-white border-green-300 text-green-900 focus:ring-green-400 focus:border-green-600"
            }`}
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
            className={`w-full p-4 border-2 rounded-lg shadow-sm transition ${
              darkMode
                ? "bg-gray-800 border-gray-600 text-white focus:ring-lime-400 focus:border-lime-500"
                : "bg-white border-green-300 text-green-900 focus:ring-green-400 focus:border-green-600"
            }`}
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
              className={`w-full p-4 border-2 rounded-lg font-semibold shadow-inner ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-white"
                  : "bg-green-100 border-green-300 text-green-700"
              }`}
            />
            <input
              type="email"
              name="userEmail"
              value="john@example.com"
              readOnly
              className={`w-full p-4 border-2 rounded-lg font-semibold shadow-inner ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-white"
                  : "bg-green-100 border-green-300 text-green-700"
              }`}
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
      </section>
    </div>
  );
};

export default ShareGardenTip;
