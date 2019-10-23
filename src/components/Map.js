import React from "react";
import Room from "./Room";
import createCoordinatesFromFirstPoint from "../utils/createCoordinatesFromFirstPoint";

const Map = ({ roomsArray, roomsObject }) => {
  if (roomsArray[0]) {
    const coordinates = createCoordinatesFromFirstPoint(roomsObject);
    console.log(coordinates);
  }

  return (
    <div>
      <div>Hi</div>
    </div>
  );
};

export default Map;
