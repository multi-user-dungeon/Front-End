import React from "react";
import Logout from "./Logout";
import Map from "./Map";
import CurrentRoom from "./CurrentRoom";
import MoveButtons from "./MoveButtons";

const Game = ({
  setLoggedIn,
  loggedIn,
  roomsArray,
  roomsObject,
  player,
  currentRoom,
  setCurrentRoom,
  error
}) => {
  return (
    <div>
      <p>Logout</p>
      <Logout setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <p>Map</p>
      <Map roomsArray={roomsArray} roomsObject={roomsObject} player={player} />
      <p>Current Room</p>
      <CurrentRoom currentRoom={currentRoom} />
      {error ? <p>Error loading map...</p> : null}
      <p>Move Buttons</p>
      <MoveButtons setCurrentRoom={setCurrentRoom} />
    </div>
  );
};

export default Game;
