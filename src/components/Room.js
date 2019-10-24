import React, { useState, useEffect } from "react";
import chooseLinesToDisplay from "../utils/chooseLinesToDisplay";

const middleDot = player => {
  let color = "purple";
  if (player) {
    color = "green";
  }
  return {
    position: "absolute",
    left: "12px",
    top: "12px",
    height: "6px",
    width: "6px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block"
  };
};

const wrapper = {
  height: "30px",
  width: "30px",
  display: "flex",
  flexWrap: "wrap",
  position: "relative"
};

const Room = ({ hallways, active, player }) => {
  const [css, setCSS] = useState({});

  useEffect(() => {
    setCSS(chooseLinesToDisplay(hallways));
  }, [hallways]);

  return (
    <div>
      {active ? (
        <div style={wrapper}>
          <div style={css.one}></div>
          <div style={css.two}></div>
          <div style={middleDot(player)}></div>
          <div style={css.three}></div>
          <div style={css.four}></div>
        </div>
      ) : (
        <div style={wrapper}></div>
      )}
    </div>
  );
};

export default Room;
