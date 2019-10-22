import React from "react";

const CurrentRoom = ({ currentRoom }) => {
  console.log(currentRoom);

  return (
    <div>
      {currentRoom.title ? (
        <div>
          <p>Name: {currentRoom.name}</p>
          <p>Title: {currentRoom.title}</p>
          <p>Description: {currentRoom.description}</p>
          <p>Error Message: {currentRoom.error_msg}</p>

          <div>Players (Stretch): {currentRoom.players}</div>
        </div>
      ) : null}
    </div>
  );
};

export default CurrentRoom;
