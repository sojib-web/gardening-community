/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const tips = [
  {
    id: 1,
    title: "How to Compost at Home",
    category: "Composting",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=100&q=60",
    status: "public",
  },
  {
    id: 2,
    title: "Best Watering Techniques",
    category: "Watering",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=60",
    status: "public",
  },
  {
    id: 3,
    title: "Urban Gardening Tips",
    category: "Urban Gardening",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=100&q=60",
    status: "public",
  },
];

const BrowseTips = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data);

  // Filter only public tips (optional if data already filtered)
  const publicTips = tips.filter((tip) => tip.status === "public");

  const handleSeeMore = (id) => {
    navigate(`/tip-details/${id}`);
  };

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Browse Tips
      </h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-green-100 text-left text-green-900 font-semibold">
                Title
              </th>
              <th className="py-3 px-6 bg-green-100 text-left text-green-900 font-semibold">
                Category
              </th>
              <th className="py-3 px-6 bg-green-100 text-center text-green-900 font-semibold">
                Image
              </th>
              <th className="py-3 px-6 bg-green-100 text-center text-green-900 font-semibold">
                See More
              </th>
            </tr>
          </thead>
          <tbody>
            {publicTips.map((tip) => (
              <tr
                key={tip.id}
                className="border-b hover:bg-green-50 cursor-pointer"
              >
                <td className="py-4 px-6">{tip.title}</td>
                <td className="py-4 px-6">{tip.category}</td>
                <td className="py-4 px-6 text-center">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-16 h-12 object-cover mx-auto rounded"
                  />
                </td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handleSeeMore(tip.id)}
                    className="text-green-700 hover:text-green-900 font-semibold flex items-center justify-center space-x-1"
                    aria-label={`See more about ${tip.title}`}
                  >
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
                    <span>See More</span>
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

export default BrowseTips;
