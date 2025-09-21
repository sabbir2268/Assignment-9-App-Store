import { Link, useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import TopApps from "./TopApps";

const Home = () => {
  const appsData = useLoaderData();

  const app1 = appsData[0];
  const app2 = appsData[2];

  return (
    <div>
      <div className="p-6">
        <Hero app={app1}></Hero>
      </div>
      <div className="p-6">
        <TopApps appsData={appsData}></TopApps>
      </div>
      <div className="p-6">
        <Hero app={app2}></Hero>
      </div>
    </div>
  );
};

export default Home;
