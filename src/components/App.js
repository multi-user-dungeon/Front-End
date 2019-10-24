import React, { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import MoveButtons from "./MoveButtons";
import Logout from "./Logout";
import CurrentRoom from "./CurrentRoom";
import Map from "./Map";
import axiosWithAuth from "../utils/axiosWithAuth";

function App() {
  const [currentRoom, setCurrentRoom] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [roomsArray, setRoomsArray] = useState([]);
  const [roomsObject, setRoomsObject] = useState({});

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

  return (
    <div className="App">
      <p>Login</p>
      <Login setLoggedIn={setLoggedIn} />
      <p>Register</p>
      <Register />
      <p>Logout</p>
      <Logout setLoggedIn={setLoggedIn} />
      <p>Current Room</p>
      <CurrentRoom currentRoom={currentRoom} />
      {error ? <p>Error loading map...</p> : null}
      <p>Move Buttons</p>
      <MoveButtons setCurrentRoom={setCurrentRoom} />
      <p>Map</p>
      <Map roomsArray={roomsArray} roomsObject={roomsObject} />
    </div>
  );
}

export default App;
