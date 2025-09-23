import React from "react";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const { name, rating, thumbnail, id, downloads } = app;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/apps/${id}`, { state: { app } });
  };

  return (
    <div
      onClick={handleNavigate}
      className="card bg-base-300 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-200"
    >
      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail}
          alt={name}
          className="rounded-xl h-40 w-full object-cover"
        />
      </figure>

      {/* Card content */}
      <div className="card-body">
        {/* Header: name + rating */}
        <div className="flex justify-between items-center w-full">
          <h1 className="card-title text-lg font-semibold">{name}</h1>
          <span className="badge badge-success text-white">⭐ {rating}</span>
        </div>

        {/* Downloads */}
        <p className="text-sm text-gray-400">
          <span className="font-medium text-gray-600">Downloads:</span>{" "}
          {downloads.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
