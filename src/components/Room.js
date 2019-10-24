import React, { useState, useEffect } from "react";
import chooseLinesToDisplay from "../utils/chooseLinesToDisplay";

const Room = ({ hallways, active }) => {
  const [css, setCSS] = useState({});

  useEffect(() => {
    setCSS(chooseLinesToDisplay(hallways));
  }, [hallways]);

  console.log(css)

  return (
    <div>
      {active ? (
        <div
          style={{
            height: "30px",
            width: "30px",
            display: "flex",
            flexWrap: "wrap",
            position: "relative"
          }}
        >
          <div
            style={css.one}
          ></div>
          <div
            style={css.two}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "12px",
              top: "12px",
              height: "6px",
              width: "6px",
              backgroundColor: "purple",
              borderRadius: "50%",
              display: "inline-block"
            }}
          ></div>
          <div
            style={css.three}
          ></div>
          <div
            style={css.four}
          ></div>
        </div>
      ) : (
        <div
          style={{
            height: "30px",
            width: "30px",
            display: "flex",
            flexWrap: "wrap",
            position: "relative"
          }}
        ></div>
      )}
    </div>
  );
};

export default Room;
