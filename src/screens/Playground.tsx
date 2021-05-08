import React from "react";

import Map1 from "../maps/playground/Map1";
import Map2 from "../maps/playground/Map2";
import Map3 from "../maps/playground/Map3";

export function Playground() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NB̶ Mapbox Playground</h1>
      </header>
      <div className="demo-container">
        <h2>Route Overview</h2>
        <Map1 />
        <h2>3D terrain</h2>
        <Map2 />
        <h2>Animating camera along geojson path</h2>
        <Map3 />
      </div>
    </div>
  );
}

export default Playground;