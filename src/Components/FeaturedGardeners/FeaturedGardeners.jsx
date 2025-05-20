import React from "react";

const gardeners = [
  {
    _id: "1",
    name: "Alice Green",
    bio: "Loves urban gardening and sustainable practices.",
    status: "active",
    profilePic: "https://i.pravatar.cc/150?img=1",
  },
  {
    _id: "2",
    name: "Bob Bloom",
    bio: "Expert in flower gardening.",
    status: "active",
    profilePic: "https://i.pravatar.cc/150?img=2",
  },
  {
    _id: "3",
    name: "David Seed",
    bio: "Tree planting advocate.",
    status: "active",
    profilePic: "https://i.pravatar.cc/150?img=3",
  },
  {
    _id: "4",
    name: "Ella Thorn",
    bio: "Herb garden enthusiast.",
    status: "active",
    profilePic: "https://i.pravatar.cc/150?img=4",
  },
  {
    _id: "5",
    name: "Grace Sprout",
    bio: "Community garden organizer.",
    status: "active",
    profilePic: "https://i.pravatar.cc/150?img=5",
  },
  {
    _id: "6",
    name: "Hank Soil",
    bio: "Soil health expert.",
    status: "active",
    profilePic: "https://i.pravatar.cc/150?img=6",
  },
  // Assume more gardeners but only active shown
];

const FeaturedGardeners = () => {
  // শুধু active gardeners নিবো
  const activeGardeners = gardeners
    .filter((g) => g.status === "active")
    .slice(0, 6);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-extrabold text-green-800 mb-10 text-center">
        🌿 Featured Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {activeGardeners.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-gradient-to-tr from-green-100 to-green-200 rounded-3xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-green-500 shadow-md">
              <img
                src={gardener.profilePic}
                alt={gardener.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                Active
              </span>
            </div>

            <h3 className="mt-6 text-center text-2xl font-bold text-green-900">
              {gardener.name}
            </h3>
            <p className="mt-2 text-center text-green-800 text-sm leading-relaxed">
              {gardener.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardeners;
