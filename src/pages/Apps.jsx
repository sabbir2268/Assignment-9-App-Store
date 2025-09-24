import Slider from "../components/Slider";
import TrendingApps from "../components/TrendingApps";

import CategoryApps from "../components/CategoryApps";
import { Suspense } from "react";

const Apps = () => {
  return (
    <div className="p-10">
      <div>
        <Slider></Slider>
      </div>
      <div>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <TrendingApps></TrendingApps>
        </Suspense>
      </div>
      <div>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <CategoryApps></CategoryApps>
        </Suspense>
      </div>
    </div>
  );
};

export default Apps;
