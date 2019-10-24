import React from "react";
import { Redirect } from "react-router-dom";

const margin = {
  width: '100%',
  textAlign: 'center',
  margin: "25px"
};

const Logout = ({ setLoggedIn, loggedIn }) => {
  const onLogout = () => {
    localStorage.removeItem("key");
    setLoggedIn(false);
  };

  return (
    <div style={margin}>
      <button onClick={onLogout}>Log Out</button>

      {!loggedIn ? <Redirect to={{ pathname: "/" }} /> : null}
    </div>
  );
};

export default Logout;
