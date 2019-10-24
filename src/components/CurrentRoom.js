import React from "react";

const background = {
  border: "1px solid black",
  margin: "25px",
  width: "400px"
};

const title = {
  textAlign: "center",
  margin: "15px"
};

const table = {
  background: "black",
  margin: "auto"
};

const tableContents = {
  border: "1px solid black",
  background: "white",
  padding: "5px"
};

const playerList = {
  textAlign: "center",
  minHeight: "100px",
  maxHeight: "100px",
  overflow: "auto",
  margin: "10px"
};

const CurrentRoom = ({ currentRoom }) => {
  return (
    <div style={background}>
      <div style={title}>Current Room</div>
      {currentRoom.title ? (
        <div>
          <table style={table}>
            <tbody>
              <tr>
                <td style={tableContents}>Name:</td>
                <td style={tableContents}>{currentRoom.name}</td>
              </tr>
              <tr>
                <td style={tableContents}>Title:</td>
                <td style={tableContents}>{currentRoom.title}</td>
              </tr>
              <tr>
                <td style={tableContents}>Description:</td>
                <td style={tableContents}>{currentRoom.description}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <div style={title}>Players In Same Room: </div>
            <div style={playerList}>
              {currentRoom.players.map(player => (
                <div key={player}>{player}</div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CurrentRoom;
