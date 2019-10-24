import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const userText = displayLogin => {
  let background;
  if (displayLogin) {
    background = "blue";
  } else {
    background = "white";
  }
  return {
    width: "50%",
    textAlign: "center",
    backgroundColor: background
  };
};

const userBackground = {
  display: "flex",
  flexWrap: "wrap",
  width: "500px",
  margin: "auto",
  justifyContent: "center"
};

const Homepage = ({ setLoggedIn, loggedIn }) => {
  const [displayLogin, setDisplayLogin] = useState(false);

  const toggleLogin = event => {
    if (event.target.innerHTML === "Login") {
      setDisplayLogin(true);
    } else {
      setDisplayLogin(false);
    }
  };
  return (
    <div style={userBackground}>
      <div style={userText(displayLogin)} onClick={event => toggleLogin(event)}>
        Login
      </div>
      <div style={userText(!displayLogin)} onClick={event => toggleLogin(event)}>
        Register
      </div>

      {displayLogin ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <Register setLoggedIn={setLoggedIn} />
      )}
      {loggedIn ? <Redirect to={{ pathname: "/game" }} /> : null}
    </div>
  );
};

export default Homepage;
