import React, { useState, useEffect } from "react";
import Room from "./Room";
import * as d3 from "d3";
import createCoordinatesFromFirstPoint from "../utils/createCoordinatesFromFirstPoint";

const Map = ({ roomsArray, roomsObject }) => {
  const [coordinates, setCoordinates] = useState({});
  const [lengthOfX, setLengthOfX] = useState(0);
  const [lengthOfY, setLengthOfY] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [widthStyle, setWidthStyle] = useState(0)

  useEffect(() => {
    if (roomsArray[0]) {
      const {
        coordinates,
        lengthOfX,
        lengthOfY,
        matrix
      } = createCoordinatesFromFirstPoint(roomsObject);

      setCoordinates(coordinates);
      setLengthOfX(lengthOfX);
      setLengthOfY(lengthOfY);
      setMatrix(matrix);
      setWidthStyle(lengthOfX.length * 30)
    }
  }, [roomsObject, roomsArray]);
  console.log(coordinates);
  console.log(lengthOfX);
  console.log(lengthOfY);
  console.log(matrix);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: widthStyle, transform: 'scale(1, -1)'}}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return <Room rowIndex={rowIndex} colIndex={colIndex}/>;
        })
      )}
    </div>
  );
};

export default Map;
