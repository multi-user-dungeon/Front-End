import React from "react";

const Logout = () => {
  const onLogout = () => {
    localStorage.removeItem("key");
  };
  return <button onClick={onLogout}>Log Out</button>;
};

export default Logout;
