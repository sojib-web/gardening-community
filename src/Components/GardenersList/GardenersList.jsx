import React from "react";
import { useLoaderData } from "react-router";
import GardenerCard from "./GardenerCard";

const GardenersList = () => {
  const gardeners = useLoaderData();
  console.log(gardeners);
  return (
    <section className="bg-green-50 min-h-screen py-16 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-green-900 tracking-wide">
        Explore Gardeners
      </h2>

      <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gardeners.map((gardener) => (
          <GardenerCard key={gardener.id} gardener={gardener} />
        ))}
      </div>
    </section>
  );
};

export default GardenersList;
