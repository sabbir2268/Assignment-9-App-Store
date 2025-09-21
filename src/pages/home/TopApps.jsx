import React from "react";

const TopApps = ({ appsData }) => {
  // Sort by rating (desc) and take top 5
  const topFive = [...appsData].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Featured games</h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
        {topFive.map((game, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden rounded-2xl shadow-md">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 font-medium text-xs md:text-sm truncate w-20 md:w-24 lg:w-28">
              {game.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">{game.rating} ★</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopApps;
