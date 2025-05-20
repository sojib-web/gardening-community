import React from "react";

const events = [
  {
    id: 1,
    title: "Spring Plant Festival",
    date: "2025-06-15",
    location: "Central Park, NY",
    description: "Join us for a day of planting workshops and plant sales.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    title: "Organic Gardening Workshop",
    date: "2025-07-10",
    location: "Community Center, CA",
    description: "Learn how to grow your garden organically and sustainably.",
    imageUrl:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 3,
    title: "Urban Gardening Meetup",
    date: "2025-08-05",
    location: "City Library, TX",
    description: "Networking event for urban gardeners and enthusiasts.",
    imageUrl:
      "https://images.unsplash.com/photo-1465188035480-4ec2920981b1?auto=format&fit=crop&w=400&q=60",
  },
];

const GardeningEvents = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        🌿 Upcoming Gardening Events
      </h2>
      <ul className="space-y-8">
        {events.map((event) => (
          <li
            key={event.id}
            className="bg-green-50 rounded-lg p-5 shadow hover:shadow-lg transition-shadow cursor-pointer flex gap-6 items-center"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-32 h-24 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                {event.title}
              </h3>
              <p className="text-green-700 text-sm mb-1">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-green-700 text-sm mb-2 italic">
                {event.location}
              </p>
              <p className="text-green-800">{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GardeningEvents;
