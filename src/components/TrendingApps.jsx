import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const TrendingApps = () => {
  const appsData = useLoaderData();

  const topRated = [...appsData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">🔥 Trending Apps</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topRated.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </section>
  );
};

export default TrendingApps;
