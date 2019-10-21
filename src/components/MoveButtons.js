import React from "react";
import axios from "axios";

const MoveButtons = () => {
  const move = event => {
    event.persist();
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/adv/move/", {
        direction: event.target.name
      })
      .then(res => console.log(res))
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
