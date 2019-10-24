import React, { useState, useEffect } from "react";
import Room from "./Room";
import createCoordinatesFromFirstPoint from "../utils/createCoordinatesFromFirstPoint";

const map = widthStyle => ({
  display: "flex",
  flexWrap: "wrap",
  maxWidth: widthStyle,
  transform: "scale(1, -1)",
  border: "1px solid black"
});

const Map = ({ roomsArray, roomsObject, player }) => {
  const [coordinates, setCoordinates] = useState({});
  const [matrix, setMatrix] = useState([]);
  const [widthStyle, setWidthStyle] = useState(0);
  const [checkActive, setCheckActive] = useState({});

  useEffect(() => {
    if (roomsArray[0]) {
      const {
        coordinates,
        lengthOfX,
        matrix,
        checkActive
      } = createCoordinatesFromFirstPoint(roomsObject);

      setCoordinates(coordinates);
      setMatrix(matrix);
      setWidthStyle(lengthOfX * 30);
      setCheckActive(checkActive);
    }
  }, [roomsObject, roomsArray]);

  return (
    <div style={map(widthStyle)}>
      {roomsArray[0]
        ? matrix.map((row, rowIndex) =>
            row.map((_, colIndex) => {
              let active = false;
              let activePlayer = false;
              if (checkActive[colIndex]) {
                if (checkActive[colIndex].includes(rowIndex)) {
                  active = true;
                }
              }
              let room = coordinates[`${colIndex} ${rowIndex}`];
              let hallways = {};

              if (player && room) {
                if (player.title === room.title) {
                  activePlayer = true;
                }
              }

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
                  player={activePlayer}
                />
              );
            })
          )
        : null}
    </div>
  );
};

export default Map;
