const createCoordinatesFromFirstPoint = roomsObject => {
  roomsObject[1].fields.x = 0;
  roomsObject[1].fields.y = 0;
  let coordinates = {};
  coordinates[1] = roomsObject[1].fields;
  let largestX = 0;
  let smallestX = 0;
  let largestY = 0;
  let smallestY = 0;
  Object.keys(roomsObject).forEach(room => {
    let box = roomsObject[room].fields;
    let findXandY = "";
    if (box.e_to) {
      if (typeof roomsObject[box.e_to].fields.x === "number") {
        findXandY = "e_to";
        box.x = roomsObject[box[findXandY]].fields.x - 1;
        box.y = roomsObject[box[findXandY]].fields.y;
      }
    }
    if (box.w_to) {
      if (typeof roomsObject[box.w_to].fields.x === "number") {
        findXandY = "w_to";
        box.x = roomsObject[box[findXandY]].fields.x + 1;
        box.y = roomsObject[box[findXandY]].fields.y;
      }
    }
    if (box.n_to) {
      if (typeof roomsObject[box.n_to].fields.x === "number") {
        findXandY = "n_to";
        box.x = roomsObject[box[findXandY]].fields.x;
        box.y = roomsObject[box[findXandY]].fields.y - 1;
      }
    }
    if (box.s_to) {
      if (typeof roomsObject[box.s_to].fields.x === "number") {
        findXandY = "s_to";
        box.x = roomsObject[box[findXandY]].fields.x;
        box.y = roomsObject[box[findXandY]].fields.y + 1;
      }
    }
    coordinates[room] = roomsObject[room].fields;
    if (box.x < smallestX) {
      smallestX = box.x;
    } else if (box.x > largestX) {
      largestX = box.x;
    }
    if (box.y < smallestY) {
      smallestY = box.y;
    } else if (box.y > largestY) {
      largestY = box.y;
    }
  });
  let lengthOfX = Array(largestX - smallestX + 1).fill(0);
  let lengthOfY = Array(largestY - smallestY + 1).fill(0);
  let matrix = Array(largestY - smallestY + 1).fill().map(() => Array(largestX - smallestX + 1).fill(0))
  return { coordinates, lengthOfX, lengthOfY, matrix };
};

export default createCoordinatesFromFirstPoint;
