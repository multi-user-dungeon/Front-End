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
            roomObject[room.pk] = room;
          });
          setRoomsObject(roomObject);
          setRoomsArray(roomArray);
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
      <p>Testing CSS</p>
      <div
        style={{
          height: "30px",
          width: "30px",
          background: "grey",
          display: "flex"
        }}
      >
        {/* How to make a dot in the middle <div
          style={{ margin: 'auto', justifyContent: "center", border: "1px solid black" }}
        ></div> */}
        {/* Makes a middle line */}
        {/* <div
          style={{ margin: '0 auto', justifyContent: "center", border: "1px solid black" }}
        ></div> */}

        <div style={{ flexDirection: "column" }}>
          <div
            style={{
              position: "relative",
              left: "100px",
              top: "100px",
              border: "1px dotted white",
              width: "3px",
              height: "3px",
              backgroundColor: "black",
              boxSizing: "border-box",
              transform: "scale(11)"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
