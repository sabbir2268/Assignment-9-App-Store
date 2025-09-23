import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";
import {
  Briefcase,
  Gamepad2,
  BookOpen,
  Clapperboard,
  Icon,
} from "lucide-react";

const CategoryApps = () => {
  const appsData = useLoaderData();

  // Filter apps by category
  // const productivityApps = appsData.filter(
  //   (app) => app.category.toLowerCase() === "productivity"
  // );
  // const gamesApps = appsData.filter(
  //   (app) => app.category.toLowerCase() === "games"
  // );
  // const educationApps = appsData.filter(
  //   (app) => app.category.toLowerCase() === "education"
  // );
  // const entertainmentApps = appsData.filter(
  //   (app) => app.category.toLowerCase() === "entertainment"
  // );

  const categories = [
    { label: "Productivity", key: "productivity", icon: Briefcase },
    { label: "Games", key: "games", icon: Gamepad2 },
    { label: "Education", key: "education", icon: BookOpen },
    { label: "Entertainment", key: "entertainment", icon: Clapperboard },
  ];

  return (
    // <section className="py-10 space-y-10">
    //   <div>
    //     <h2 className="text-2xl font-bold mb-6"> Productivity Apps</h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {productivityApps.map((app) => (
    //         <AppCard key={app.id} app={app} />
    //       ))}
    //     </div>
    //   </div>

    //   {/* game category */}
    //   <div>
    //     <h2 className="text-2xl font-bold mb-6">🔥 Game Apps</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {gamesApps.map((app) => (
    //         <AppCard key={app.id} app={app} />
    //       ))}
    //     </div>
    //   </div>

    //   <div>
    //     <h2 className="text-2xl font-bold mb-6">🔥 Education Apps</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {educationApps.map((app) => (
    //         <AppCard key={app.id} app={app} />
    //       ))}
    //     </div>
    //   </div>

    //   <div>
    //     <h2 className="text-2xl font-bold mb-6">🔥 Entertainment Apps</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {entertainmentApps.map((app) => (
    //         <AppCard key={app.id} app={app} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

    // from original code to chatgpt
    <section className="py-10 space-y-10">
      {categories.map(({ label, key, icon: Icon }) => {
        const filteredApps = appsData.filter(
          (app) => app.category.toLowerCase() === key
        );

        return (
          <div key={key}>
            {/* Category Heading with Icon */}
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon className="w-6 h-6 text-primary" />
              {label} Apps
            </h2>

            {/* Apps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CategoryApps;
