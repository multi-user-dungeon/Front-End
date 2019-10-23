import React, { useState, useEffect } from "react";

const Room = ({ rowIndex, colIndex, active }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (active) {
      setColor("red");
    } else {
      setColor("white");
    }
  }, [active]);

  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        border: "1px solid lightgray",
        boxSizing: "border-box",
        background: color
      }}
    >
      {rowIndex} {colIndex}
    </div>
  );
};

export default Room;
