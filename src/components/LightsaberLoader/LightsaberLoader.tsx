import React from "react";
import "./LightsaberLoader.css";

export const LightsaberLoader = () => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-xl font-bold text-star-wars-yellow mb-4">
      Gathering data from the dark side...
    </p>
    <div className="relative flex items-center">
      <div className="lightsaber-handle">
        <div className="handle-grip" />
        <div className="handle-stripe" />
        <div className="handle-button" />
      </div>
      <div className="lightsaber-blade" />
    </div>
  </div>
);
