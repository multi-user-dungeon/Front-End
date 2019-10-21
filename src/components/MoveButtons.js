import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const MoveButtons = ({ setCurrentRoom }) => {
  const move = event => {
    event.persist();
    axiosWithAuth
      .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", {
        direction: event.target.name
      })
      .then(res => setCurrentRoom(res))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <button name="n" onClick={event => move(event)}>
        Up
      </button>
      <button name="s" onClick={event => move(event)}>
        Down
      </button>
      <button name="w" onClick={event => move(event)}>
        Left
      </button>
      <button name="e" onClick={event => move(event)}>
        Right
      </button>
    </div>
  );
};

export default MoveButtons;
