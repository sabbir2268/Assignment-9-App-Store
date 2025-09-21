import React, { useState } from "react";

const Hero = ({ app }) => {
  const [installed, setInstallted] = useState(false);

  const handleInstalled = () => {
    setInstallted(!installed);
  };

  return (
    <div>
      <div className="bg-base-200 rounded-xl shadow-md flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 gap-6">
        {/* Left Section */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 items-start lg:items-start">
          {/* Tag */}
          <span className="text-xs font-semibold bg-green-200 text-green-800 px-3 py-1 rounded-full w-max">
            Now available
          </span>

          {/* Title */}
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
            {app.name}, now on PC and mobile
          </h2>

          <p className="text-lg text-gray-600">
            Relive the {app.category} experience
          </p>

          {/* App Info */}
          <div className="flex items-center gap-3 mt-2">
            <img
              src={app.thumbnail}
              alt={app.name}
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h3 className="font-semibold">{app.name}</h3>
              <p className="text-sm text-gray-500">{app.developer}</p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleInstalled}
            className={`btn mt-4 w-max ${
              installed ? "btn-secondary" : "btn-success"
            }`}
          >
            {installed ? "Uninstall Now" : "Install Now"}
          </button>
          {/* <Link
            to={`/apps/${app.id}`}
            onClick={handleInstalled}
            className="btn btn-success mt-4 w-max"
          >
            Install on Windows
          </Link> */}
          <p className="text-xs text-gray-400">In-app purchases</p>
        </div>

        {/* Right Section: Banner Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={app.banner}
            alt={`${app.name} banner`}
            className="rounded-xl shadow-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
