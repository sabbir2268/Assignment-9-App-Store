import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const currentUser = {
  name: "John Doe", // Replace with dynamic user after login integration
};

const AppDetails = () => {
  const app = useLoaderData(); // comes directly from loader

  const [install, setInstall] = useState(false);
  const [reviews, setReviews] = useState(app?.reviews || []);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  const {
    name,
    developer,
    banner,
    downloads,
    category,
    rating: avgRating,
    description,
    features,
  } = app;

  const handleInstall = () => {
    if (!install) {
      alert(`Installing ${name}...`);
    } else {
      alert(`Uninstalled ${name}...`);
    }
    setInstall(!install);
  };

  const handleSubmitReview = () => {
    const parsedRating = parseInt(rating);
    if (!currentUser) {
      alert("You must be logged in to submit a review.");
      return;
    }
    if (!reviewText.trim()) {
      alert("Please enter a review comment.");
      return;
    }
    if (!parsedRating || parsedRating < 1 || parsedRating > 5) {
      alert("Rating must be a number between 1 and 5.");
      return;
    }

    const newReview = {
      user: currentUser.name,
      comment: reviewText,
      rating: parsedRating,
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating("");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg-gray-900 text-gray-100 rounded-xl shadow-lg">
      <div className="w-full h-60 overflow-hidden rounded-xl mb-6">
        {/* banner */}
        <img
          src={banner}
          alt={`${name} banner`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* details */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">{name}</h1>
          <p className="text-gray-400 mb-1">by {developer}</p>
          <p className="text-gray-400 mb-1">Category: {category}</p>
          <p className="text-yellow-400 mb-1">⭐ {avgRating}</p>
          <p className="text-gray-400 mb-2">
            Downloads: {downloads.toLocaleString()}
          </p>
          <button
            onClick={handleInstall}
            className={`mt-2 px-6 py-2  text-white font-semibold rounded-lg transition ${
              !install ? "btn btn-primary" : "btn btn-secondary"
            }`}
          >
            {!install ? "Install" : "Uninstall"}
          </button>
        </div>
      </div>
      {/* description */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-white">Description</h2>
        <p className="text-gray-300">{description}</p>
      </div>
      {/* features */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-white">Features</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* reviews form*/}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Submit a Review
        </h2>
        {!currentUser ? (
          <p className="text-gray-400">Login to submit a review.</p>
        ) : (
          <>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review..."
              className="w-full p-3 mb-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="1-5"
              className="w-24 p-3 mb-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <br />
            <button
              onClick={handleSubmitReview}
              className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition"
            >
              Submit Review
            </button>
          </>
        )}
      </div>

      {/* Reviews */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-white">Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 bg-gray-700"
            >
              <p className="font-semibold text-white">{review.user}</p>
              <p className="text-gray-300">{review.comment}</p>
              <p className="text-yellow-400">⭐ {review.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
