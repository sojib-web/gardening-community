import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

const BrowseTips = () => {
  const navigate = useNavigate();
  const BrowseData = useLoaderData();

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

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-extrabold text-white text-center mb-10">
        🌿 Browse Gardening Tips
      </h2>

      {/* Filter and Sort Controls */}
      <div className="mb-6 flex justify-between items-center">
        {/* Filter */}
        <select
          value={selectedDifficulty}
          onChange={handleDifficultyChange}
          className="px-4 py-2 border border-green-400 rounded-lg shadow text-white font-medium bg-green-900"
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label className="text-white font-semibold">Sort by Title:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border border-green-400 rounded-lg shadow text-white font-medium bg-green-900"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      {/* Tips Table */}
      <div className="overflow-x-auto rounded-2xl shadow-2xl border border-green-200 bg-white">
        <table className="min-w-full rounded-2xl overflow-hidden">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-green-200 text-left text-lg text-green-900 font-bold rounded-tl-2xl">
                Title
              </th>
              <th className="py-4 px-6 bg-green-200 text-left text-lg text-green-900 font-bold">
                Category
              </th>
              <th className="py-4 px-6 bg-green-200 text-left text-lg text-green-900 font-bold">
                Difficulty
              </th>
              <th className="py-4 px-6 bg-green-200 text-center text-lg text-green-900 font-bold">
                Image
              </th>
              <th className="py-4 px-6 bg-green-200 text-center text-lg text-green-900 font-bold rounded-tr-2xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((tip, index) => (
                <tr
                  key={tip._id}
                  className={`${
                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                  } border-b hover:bg-green-100 transition duration-300 ease-in-out`}
                >
                  <td className="py-4 px-6 text-green-900 font-semibold">
                    {tip.title}
                  </td>
                  <td className="py-4 px-6 text-green-700 italic">
                    {tip.category}
                  </td>
                  <td className="py-4 px-6 text-green-700">{tip.difficulty}</td>
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
  );
};

export default BrowseTips;
