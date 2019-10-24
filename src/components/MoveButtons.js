import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const container = {
  textAlign: "center"
};

const MoveButtons = ({ setCurrentRoom }) => {
  const move = direction => {
    axiosWithAuth()
      .post("/api/adv/move/", {
        direction: direction
      })
      .then(res => setCurrentRoom(res.data))
      .catch(error => console.log(error));
  };

  return (
    <div style={container}>
      <p>Move Buttons</p>
      <div>
        <button onClick={() => move("n")}>
          <span>&#8593;</span>
        </button>
      </div>
      <div>
        <button onClick={() => move("w")}>
          <span>&#8592;</span>
        </button>
        <button onClick={() => move("s")}>
          <span>&#8595;</span>
        </button>
        <button onClick={() => move("e")}>
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default MoveButtons;
