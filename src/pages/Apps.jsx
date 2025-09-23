import Slider from "../components/Slider";
import TrendingApps from "../components/TrendingApps";

import CategoryApps from "../components/CategoryApps";

const Apps = () => {
  return (
    <div className="p-10">
      <div>
        <Slider></Slider>
      </div>
      <div>
        <TrendingApps></TrendingApps>
      </div>
      <div>
        <CategoryApps></CategoryApps>
      </div>
    </div>
  );
};

export default Apps;
