import React from "react";

const CurrentRoom = ({ currentRoom }) => {
  console.log(currentRoom);

  return (
    <div>
      <p>Name: {currentRoom.name}</p>
      <p>Title: {currentRoom.title}</p>
      <p>Description: {currentRoom.description}</p>
      <p>Error Message: {currentRoom.error_msg}</p>
      <p>Players (Stretch): {currentRoom.players}</p>
    </div>
  );
};

export default CurrentRoom;
