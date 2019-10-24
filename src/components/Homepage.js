import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

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
    <div>
      <p onClick={event => toggleLogin(event)}>Login</p>
      <p onClick={event => toggleLogin(event)}>Register</p>
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
