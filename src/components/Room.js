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
          height: "30px",
          width: "30px",
          background: color,
          display: "flex",
          flexWrap: 'wrap',
          position: 'relative'
        }}
      >
        <div style={{ width: '14px', margin: '0 auto', borderRight: '1px solid black', borderBottom: '1px solid black' }}></div>
        <div style={{ width: '14px', margin: '0 auto', borderLeft: '1px solid red', borderBottom: '1px solid red' }}></div>
        <div style={{ position: 'absolute', left: '12px', top: '12px', height: '6px', width: '6px', backgroundColor: 'purple', borderRadius: '50%', display: 'inline-block' }}></div>
        <div style={{ width: '14px', margin: '0 auto', borderTop: '1px solid green', borderRight: '1px solid green' }}></div>
        <div style={{ width: '14px', margin: '0 auto', borderLeft: '1px solid blue', borderTop: '1px solid blue' }}></div>
      </div>
  );
};

export default Room;
