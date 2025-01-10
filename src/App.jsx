import React from "react";
import NetflixSeries from "./components/NetflixSeries";
import { EventHandler } from "./components/EvenHandler";
import { EventProps } from "./components/EventProps";
import { EventPropagation } from "./components/EvenPropagation";

const App=()=>{
  return (
    <div className="container">
      {/* <NetflixSeries/> */}
      {/* <EventHandler/> */}
      {/* <EventProps></EventProps> */}
      <EventPropagation></EventPropagation>
    </div>
  )
}
export default App;

