import React, { useState, useEffect } from "react";
import Room from "./Room";
import * as d3 from "d3";
import createCoordinatesFromFirstPoint from "../utils/createCoordinatesFromFirstPoint";

const Map = ({ roomsArray, roomsObject }) => {
  const [coordinates, setCoordinates] = useState({});
  const [lengthOfX, setLengthOfX] = useState(0);
  const [lengthOfY, setLengthOfY] = useState(0);

  useEffect(() => {
    if (roomsArray[0]) {
      const {
        coordinates,
        lengthOfX,
        lengthOfY
      } = createCoordinatesFromFirstPoint(roomsObject);

      setCoordinates(coordinates);
      setLengthOfX(lengthOfX);
      setLengthOfY(lengthOfY);
    }
  }, [roomsObject, roomsArray]);
  console.log(coordinates);
  console.log(lengthOfX);
  console.log(lengthOfY);

  // currently grabs coordinates, length of X, length of y
  // want to set initial starting point in middle of graph (assume no negative values)
  // for x in range(lengthOfX)
  //  for y in range(lengthOfY)
  // d3.select('div').selectAll('')

  return <div></div>;
};

export default Map;
