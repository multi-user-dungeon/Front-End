import React from "react";
import Room from "./Room";

const Map = ({ roomsArray, roomsObject }) => {
  const createCoordinatesFromFirstPoint = () => {
    roomsObject[1].fields.x = 0;
    roomsObject[1].fields.y = 0;
    // console.log(roomsObject[roomsObject[2].fields.s_to].fields.x)
    Object.keys(roomsObject).forEach(room => {
      if (room.x === 0 && room.y === 0) {
        return;
      } else {
        let box = roomsObject[room].fields;
        let findXandY = "";
        if (box.e_to) {
          if (typeof roomsObject[box.e_to].fields.x === 'number') {
            findXandY = "e_to";
          }
        }
        if (box.w_to) {
          if (typeof roomsObject[box.w_to].fields.x === 'number') {
            findXandY = "w_to";
          }
        }
        if (box.n_to) {
          if (typeof roomsObject[box.n_to].fields.x === 'number') {
            findXandY = "n_to";
          }
        }
        if (box.s_to) {
          if (typeof roomsObject[box.s_to].fields.x === 'number') {
            findXandY = "s_to";
          }
        }
        console.log(roomsObject[box[findXandY]].fields)
      }
    });
    console.log(roomsObject);
  };

  if (roomsArray[0]) {
    createCoordinatesFromFirstPoint();
  }

  return (
    <div>
      <div>Hi</div>
    </div>
  );
};

export default Map;
