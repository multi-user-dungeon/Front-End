import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import Homepage from "./Homepage";
import Game from "./Game";

function App() {
  const [currentRoom, setCurrentRoom] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [roomsArray, setRoomsArray] = useState([]);
  const [roomsObject, setRoomsObject] = useState({});
  const [playerRoom, setPlayerRoom] = useState({});

  useEffect(() => {
    if (localStorage.getItem("key")) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      axiosWithAuth()
        .get("/api/adv/init/")
        .then(res => setCurrentRoom(res.data))
        .catch(error => setError(true));
      axiosWithAuth()
        .get("/api/adv/rooms/")
        .then(res => {
          let roomObject = {};
          let roomArray = JSON.parse(res.data.rooms);
          roomArray.forEach(room => {
            roomObject[room.id] = room;
          });
          setRoomsObject(roomObject);
          setRoomsArray(roomArray);

          // For Test  Server
          // let roomObject = {};
          // let roomArray = JSON.parse(res.data.rooms);
          // roomArray.forEach(room => {
          //   roomObject[room.pk] = room;
          // });
          // setRoomsObject(roomObject);
          // setRoomsArray(roomArray);
        })
        .catch(error => console.log(error));
    }
  }, [loggedIn]);

  useEffect(() => {
    const room = roomsArray.find(
      element => element.title === currentRoom.title
    );
    setPlayerRoom({ ...room, ...currentRoom });
  }, [roomsArray, currentRoom]);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Homepage setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          )}
        />
        <Route
          path="/game"
          render={() => (
            <Game
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
              roomsArray={roomsArray}
              roomsObject={roomsObject}
              player={playerRoom}
              currentRoom={currentRoom}
              setCurrentRoom={setCurrentRoom}
              error={error}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
