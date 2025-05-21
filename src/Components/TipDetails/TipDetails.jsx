import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/share-garden-tip/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleLike = () => {
    setLiked(!liked);
    // Optionally: send like info to backend
  };

  if (loading) {
    return (
      <div className="text-center text-green-700 py-20 text-xl font-semibold">
        Loading Tip Details...
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow-2xl rounded-2xl p-8 border border-green-200">
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full h-72 object-cover rounded-xl shadow mb-6"
        />
        <h2 className="text-3xl font-bold text-green-800 mb-4">{tip.title}</h2>
        <p className="text-green-600 mb-2 text-lg">
          <strong>Category:</strong> {tip.category}
        </p>
        <p className="text-green-600 mb-2">
          <strong>Plant Type:</strong> {tip.plantType}
        </p>
        <p className="text-green-600 mb-2">
          <strong>Difficulty:</strong> {tip.difficulty}
        </p>
        <p className="text-green-600 mb-2">
          <strong>Posted by:</strong> {tip.userName} ({tip.userEmail})
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Description:
          </h3>
          <p className="text-gray-700">{tip.description}</p>
        </div>

        {/* Like Button */}
        <div className="mt-8">
          <button
            onClick={handleLike}
            className={`px-5 py-2 rounded-full font-semibold text-white shadow transition ${
              liked
                ? "bg-pink-600 hover:bg-pink-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {liked ? "❤️ Liked" : "🤍 Like"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TipDetails;
