const createCoordinatesFromFirstPoint = roomsObject => {
  roomsObject[1].x = 0;
  roomsObject[1].y = 0;
  let coordinates = {};
  let checkActive = {};
  // coordinates[1] = roomsObject[1];
  let largestX = 0;
  let smallestX = 0;
  let largestY = 0;
  let smallestY = 0;
  Object.keys(roomsObject).forEach(room => {
    let box = roomsObject[room];
    let findXandY = "";
    if (box.e_to) {
      if (typeof roomsObject[box.e_to].x === "number") {
        findXandY = "e_to";
        box.x = roomsObject[box[findXandY]].x - 1;
        box.y = roomsObject[box[findXandY]].y;
      }
    }
    if (box.w_to) {
      if (typeof roomsObject[box.w_to].x === "number") {
        findXandY = "w_to";
        box.x = roomsObject[box[findXandY]].x + 1;
        box.y = roomsObject[box[findXandY]].y;
      }
    }
    if (box.n_to) {
      if (typeof roomsObject[box.n_to].x === "number") {
        findXandY = "n_to";
        box.x = roomsObject[box[findXandY]].x;
        box.y = roomsObject[box[findXandY]].y - 1;
      }
    }
    if (box.s_to) {
      if (typeof roomsObject[box.s_to].x === "number") {
        findXandY = "s_to";
        box.x = roomsObject[box[findXandY]].x;
        box.y = roomsObject[box[findXandY]].y + 1;
      }
    }
    coordinates[`${box.x} ${box.y}`] = roomsObject[room];

    if (checkActive[coordinates[`${box.x} ${box.y}`].x]) {
      checkActive[coordinates[`${box.x} ${box.y}`].x].push(
        coordinates[`${box.x} ${box.y}`].y
      );
    } else {
      checkActive[coordinates[`${box.x} ${box.y}`].x] = [
        coordinates[`${box.x} ${box.y}`].y
      ];
    }

    // For Test Server
    // roomsObject[1].fields.x = 0;
    // roomsObject[1].fields.y = 0;
    // let coordinates = {};
    // let checkActive = {}
    // // coordinates[1] = roomsObject[1].fields;
    // let largestX = 0;
    // let smallestX = 0;
    // let largestY = 0;
    // let smallestY = 0;
    // Object.keys(roomsObject).forEach(room => {
    //   let box = roomsObject[room].fields;
    //   let findXandY = "";
    //   if (box.e_to) {
    //     if (typeof roomsObject[box.e_to].fields.x === "number") {
    //       findXandY = "e_to";
    //       box.x = roomsObject[box[findXandY]].fields.x - 1;
    //       box.y = roomsObject[box[findXandY]].fields.y;
    //     }
    //   }
    //   if (box.w_to) {
    //     if (typeof roomsObject[box.w_to].fields.x === "number") {
    //       findXandY = "w_to";
    //       box.x = roomsObject[box[findXandY]].fields.x + 1;
    //       box.y = roomsObject[box[findXandY]].fields.y;
    //     }
    //   }
    //   if (box.n_to) {
    //     if (typeof roomsObject[box.n_to].fields.x === "number") {
    //       findXandY = "n_to";
    //       box.x = roomsObject[box[findXandY]].fields.x;
    //       box.y = roomsObject[box[findXandY]].fields.y - 1;
    //     }
    //   }
    //   if (box.s_to) {
    //     if (typeof roomsObject[box.s_to].fields.x === "number") {
    //       findXandY = "s_to";
    //       box.x = roomsObject[box[findXandY]].fields.x;
    //       box.y = roomsObject[box[findXandY]].fields.y + 1;
    //     }
    //   }
    //   coordinates[`${box.x} ${box.y}`] = roomsObject[room].fields;

    //   if (checkActive[coordinates[`${box.x} ${box.y}`].x]) {
    //     checkActive[coordinates[`${box.x} ${box.y}`].x].push(coordinates[`${box.x} ${box.y}`].y)
    //   } else {
    //     checkActive[coordinates[`${box.x} ${box.y}`].x] = [coordinates[`${box.x} ${box.y}`].y]
    //   }

    // coordinates[room] = roomsObject[room].fields;

    // if (checkActive[coordinates[room].x]) {
    //   checkActive[coordinates[room].x].push(coordinates[room].y)
    // } else {
    //   checkActive[coordinates[room].x] = [coordinates[room].y]
    // }

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
  let lengthOfX = largestX - smallestX + 1;
  let lengthOfY = largestY - smallestY + 1;
  let matrix = Array(largestY - smallestY + 1)
    .fill()
    .map(() => Array(largestX - smallestX + 1).fill(0));

  return { coordinates, lengthOfX, lengthOfY, matrix, checkActive };
};

export default createCoordinatesFromFirstPoint;
