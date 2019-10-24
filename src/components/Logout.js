import React from "react";
import { Redirect } from "react-router-dom";

const Logout = ({ setLoggedIn, loggedIn }) => {
  const onLogout = () => {
    localStorage.removeItem("key");
    setLoggedIn(false);
  };

  return (
    <div>
      <button onClick={onLogout}>Log Out</button>

      {!loggedIn ? <Redirect to={{ pathname: "/" }} /> : null}
    </div>
  );
};

export default Logout;
