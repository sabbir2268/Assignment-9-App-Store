import Slider from "../components/Slider";
import TrendingApps from "../components/TrendingApps";

import CategoryApps from "../components/CategoryApps";
import { Suspense } from "react";
import { Helmet } from "react-helmet";

const Apps = () => {
  return (
    <>
      <Helmet>
        <title>All Apps | GeminiApp</title>
        <meta
          name="description"
          content="Browse trending apps, explore categories, and find your next favorite app on GeminiApp."
        />
        <meta
          name="keywords"
          content="apps, trending apps, categories, GeminiApp"
        />
        <meta name="author" content="GeminiApp" />
      </Helmet>

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
    </>
  );
};

export default Apps;
