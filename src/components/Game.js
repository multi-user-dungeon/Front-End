import React from "react";
import Logout from "./Logout";
import Map from "./Map";
import CurrentRoom from "./CurrentRoom";
import MoveButtons from "./MoveButtons";

const userBackground = {
  display: "flex",
  flexWrap: "wrap",
  width: "500px",
  margin: "auto",
  justifyContent: "center"
};

const Game = ({
  setLoggedIn,
  loggedIn,
  roomsArray,
  roomsObject,
  player,
  currentRoom,
  setCurrentRoom
}) => {
  return (
    <div>
      {roomsArray[0] ? (
        <div style={userBackground}>
          <Logout setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          <p>Map of the World</p>
          <Map
            roomsArray={roomsArray}
            roomsObject={roomsObject}
            player={player}
          />
          <CurrentRoom currentRoom={currentRoom} />
          <MoveButtons setCurrentRoom={setCurrentRoom} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Game;
