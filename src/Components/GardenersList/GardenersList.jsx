import React from "react";

const gardeners = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 34,
    gender: "Female",
    status: "Active",
    experience: "10 years",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    totalTipsShared: 25,
    otherInfo: "Loves organic gardening and composting.",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 45,
    gender: "Male",
    status: "Inactive",
    experience: "15 years",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    totalTipsShared: 40,
    otherInfo: "Expert in drought-resistant plants.",
  },
  {
    id: 3,
    name: "Catherine Lee",
    age: 29,
    gender: "Female",
    status: "Active",
    experience: "7 years",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    totalTipsShared: 18,
    otherInfo: "Specializes in urban gardening.",
  },
];

const GardenersList = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">
        All Gardeners Profiles
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {gardeners.map((gardener) => (
          <div
            key={gardener.id}
            className="bg-green-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-green-900 mb-1">
              {gardener.name}
            </h3>
            <p className="text-green-700 mb-1">
              <strong>Age:</strong> {gardener.age}
            </p>
            <p className="text-green-700 mb-1">
              <strong>Gender:</strong> {gardener.gender}
            </p>
            <p className="text-green-700 mb-1">
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  gardener.status === "Active"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {gardener.status}
              </span>
            </p>
            <p className="text-green-700 mb-1">
              <strong>Experience:</strong> {gardener.experience}
            </p>
            <p className="text-green-700 mb-1">
              <strong>Total Shared Tips:</strong> {gardener.totalTipsShared}
            </p>
            <p className="text-green-700 italic text-sm">
              {gardener.otherInfo}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GardenersList;
