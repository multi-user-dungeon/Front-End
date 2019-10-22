import React, { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import MoveButtons from "./MoveButtons";
import Logout from "./Logout";
import CurrentRoom from "./CurrentRoom";
import axiosWithAuth from "../utils/axiosWithAuth";

function App() {
  const [currentRoom, setCurrentRoom] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);

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
    }
  }, [loggedIn]);

  console.log(localStorage.getItem("key"));

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
    </div>
  );
}

export default App;
