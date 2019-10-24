import React, { useState, useEffect } from "react";
import Room from "./Room";
import createCoordinatesFromFirstPoint from "../utils/createCoordinatesFromFirstPoint";

const Map = ({ roomsArray, roomsObject }) => {
  const [coordinates, setCoordinates] = useState({});
  const [lengthOfX, setLengthOfX] = useState(0);
  const [lengthOfY, setLengthOfY] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [widthStyle, setWidthStyle] = useState(0);
  const [checkActive, setCheckActive] = useState({});

  useEffect(() => {
    if (roomsArray[0]) {
      const {
        coordinates,
        lengthOfX,
        lengthOfY,
        matrix,
        checkActive
      } = createCoordinatesFromFirstPoint(roomsObject);

      setCoordinates(coordinates);
      setLengthOfX(lengthOfX);
      setLengthOfY(lengthOfY);
      setMatrix(matrix);
      setWidthStyle(lengthOfX * 30);
      setCheckActive(checkActive);
    }
  }, [roomsObject, roomsArray]);

  console.log(coordinates);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: widthStyle,
        transform: "scale(1, -1)"
      }}
    >
      {roomsArray[0]
        ? matrix.map((row, rowIndex) =>
            row.map((_, colIndex) => {
              let active = false;
              if (checkActive[colIndex]) {
                if (checkActive[colIndex].includes(rowIndex)) {
                  active = true;
                }
              }
              let room = coordinates[`${colIndex} ${rowIndex}`];
              let hallways = {};
              if (room) {
                if (room.n_to) {
                  hallways.n = true;
                }
                if (room.s_to) {
                  hallways.s = true;
                }
                if (room.e_to) {
                  hallways.e = true;
                }
                if (room.w_to) {
                  hallways.w = true;
                }
              }
              return (
                <Room
                  key={`${rowIndex} ${colIndex}`}
                  active={active}
                  hallways={hallways}
                />
              );
            })
          )
        : null}
    </div>
  );
};

export default Map;
