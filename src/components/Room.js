import React from "react";

const Room = ({ rowIndex, colIndex }) => {
  return (
    <div style={{ width: '30px', height: '30px', border: '1px solid lightgray', boxSizing: 'border-box', background: 'red'}}>{rowIndex} {colIndex}</div>
  );
};

export default Room;
