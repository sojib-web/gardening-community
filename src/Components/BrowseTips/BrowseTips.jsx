// @ts-nocheck
import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { DarkModeContext } from "../../Context/DarkModeContext";

const BrowseTips = () => {
  const navigate = useNavigate();
  const BrowseData = useLoaderData();
  const { darkMode } = useContext(DarkModeContext);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [filteredData, setFilteredData] = useState(BrowseData);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSeeMore = (id) => {
    navigate(`/tip-details/${id}`);
  };

  const handleDifficultyChange = (e) => {
    const difficulty = e.target.value;
    setSelectedDifficulty(difficulty);

    if (!difficulty) {
      setFilteredData(BrowseData);
    } else {
      const filtered = BrowseData.filter(
        (tip) => tip.difficulty === difficulty
      );
      setFilteredData(filtered);
    }
  };

  // Sorting
  const sortedData = [...filteredData].sort((a, b) =>
    sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      <section
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <h2
          className={`text-4xl font-extrabold text-center mb-10 ${
            darkMode ? "text-lime-400" : "text-green-800"
          }`}
        >
          🌿 Browse Gardening Tips
        </h2>

        {/* Filter + Sort Controls */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Filter */}
          <select
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
            className={`px-4 py-2 border rounded-lg shadow font-medium ${
              darkMode
                ? "border-lime-500 bg-gray-800 text-white"
                : "border-green-400 bg-green-100 text-green-800"
            }`}
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label
              className={`font-semibold ${
                darkMode ? "text-lime-300" : "text-green-800"
              }`}
            >
              Sort by Title:
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={`px-4 py-2 border rounded-lg shadow font-medium ${
                darkMode
                  ? "border-lime-500 bg-gray-800 text-white"
                  : "border-green-400 bg-green-100 text-green-800"
              }`}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Tips Table */}
        <div
          className={`overflow-x-auto rounded-2xl shadow-2xl border ${
            darkMode
              ? "border-gray-700 bg-gray-800"
              : "border-green-200 bg-white"
          }`}
        >
          <table className="min-w-full rounded-2xl overflow-hidden">
            <thead>
              <tr>
                {["Title", "Category", "Difficulty", "Image", "Action"].map(
                  (head, idx) => (
                    <th
                      key={idx}
                      className={`py-4 px-6 text-left text-lg font-bold ${
                        darkMode
                          ? "bg-gray-700 text-lime-300"
                          : "bg-green-200 text-green-900"
                      } ${idx === 0 ? "rounded-tl-2xl" : ""} ${
                        idx === 4 ? "text-center rounded-tr-2xl" : ""
                      }`}
                    >
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {sortedData.length > 0 ? (
                sortedData.map((tip, index) => (
                  <tr
                    key={tip._id}
                    className={`border-b transition duration-300 ease-in-out ${
                      darkMode
                        ? index % 2 === 0
                          ? "bg-gray-900"
                          : "bg-gray-800"
                        : index % 2 === 0
                        ? "bg-green-50"
                        : "bg-white"
                    } hover:bg-opacity-80`}
                  >
                    <td className="py-4 px-6 font-semibold">{tip.title}</td>
                    <td className="py-4 px-6 italic">{tip.category}</td>
                    <td className="py-4 px-6">{tip.difficulty}</td>
                    <td className="py-4 px-6 text-center">
                      <img
                        src={tip.imageUrl}
                        alt={tip.title}
                        className="w-20 h-14 object-cover mx-auto rounded-md shadow hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleSeeMore(tip._id)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl hover:from-green-600 hover:to-green-800 font-semibold shadow-lg transition-all duration-300"
                      >
                        See More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m6 0l-3-3m3 3l-3 3"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-red-600 font-semibold"
                  >
                    No tips found for the selected difficulty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default BrowseTips;
