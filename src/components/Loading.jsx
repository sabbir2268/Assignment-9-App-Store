import React from "react";
const Loading = () => {
  return (
    <div>
      <div className="flex h-screen w-screen place-items-center justify-center">
        <span className="loading loading-infinity loading-xl place-items-center"></span>
      </div>
    </div>
  );
};

export default Loading;
