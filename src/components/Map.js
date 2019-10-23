import React from "react";
import Room from "./Room";

const Map = ({ roomsArray, roomsObject }) => {
  const createCoordinatesFromFirstPoint = () => {
    roomsObject[1].fields.x = 0;
    roomsObject[1].fields.y = 0;
    let coordinates = {};
    coordinates[1] = roomsObject[1].fields;
    Object.keys(roomsObject).forEach(room => {
      let box = roomsObject[room].fields;
      let findXandY = "";
      if (box.e_to) {
        if (typeof roomsObject[box.e_to].fields.x === "number") {
          findXandY = "e_to";
          box.x = roomsObject[box[findXandY]].fields.x - 1;
          box.y = roomsObject[box[findXandY]].fields.y;
          coordinates[room] = roomsObject[room].fields;
        }
      }
      if (box.w_to) {
        if (typeof roomsObject[box.w_to].fields.x === "number") {
          findXandY = "w_to";
          box.x = roomsObject[box[findXandY]].fields.x + 1;
          box.y = roomsObject[box[findXandY]].fields.y;
          coordinates[room] = roomsObject[room].fields;
        }
      }
      if (box.n_to) {
        if (typeof roomsObject[box.n_to].fields.x === "number") {
          findXandY = "n_to";
          box.x = roomsObject[box[findXandY]].fields.x;
          box.y = roomsObject[box[findXandY]].fields.y - 1;
          coordinates[room] = roomsObject[room].fields;
        }
      }
      if (box.s_to) {
        if (typeof roomsObject[box.s_to].fields.x === "number") {
          findXandY = "s_to";
          box.x = roomsObject[box[findXandY]].fields.x;
          box.y = roomsObject[box[findXandY]].fields.y + 1;
          coordinates[room] = roomsObject[room].fields;
        }
      }

      console.log(box.x, box.y);
    });
    console.log(coordinates);
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
