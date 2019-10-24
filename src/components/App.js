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
          display: "flex",
          flexWrap: 'wrap',
          position: 'relative'
        }}
      >
        {/* How to make a dot in the middle - for player dot */}
        {/* <div
          style={{
            margin: "auto",
            justifyContent: "center",
            border: "5px solid green"
          }}
        ></div> */}
        {/* Makes a middle line */}
        {/* <div>
          <div
            style={{
              margin: "0 auto",
              justifyContent: "center",
              border: "1px solid black"
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              margin: "0 auto",
              justifyContent: "center",
              border: "1px solid red"
            }}
          ></div>
        </div> */}

        {/* Makes a vertical line, can use twice to enable/disable */}
        {/* <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              margin: "auto 0",
              alignContent: "center",
              border: "1px solid black"
            }}
          ></div>
        </div>
        <div
          style={{
            margin: "auto",
            justifyContent: "center",
            border: "5px solid green"
          }}
        ></div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              margin: "auto 0",
              alignContent: "center",
              border: "1px solid red"
            }}
          ></div>
        </div> */}

        <div style={{ width: '14px', margin: '0 auto', borderRight: '1px solid black', borderBottom: '1px solid black' }}></div>
        <div style={{ width: '14px', margin: '0 auto', borderLeft: '1px solid red', borderBottom: '1px solid red' }}></div>
        <div style={{ position: 'absolute', left: '12px', top: '12px', height: '6px', width: '6px', backgroundColor: 'purple', borderRadius: '50%', display: 'inline-block' }}></div>
        <div style={{ width: '14px', margin: '0 auto', borderTop: '1px solid green', borderRight: '1px solid green' }}></div>
        <div style={{ width: '14px', margin: '0 auto', borderLeft: '1px solid blue', borderTop: '1px solid blue' }}></div>
      </div>
    </div>
  );
}

export default App;
