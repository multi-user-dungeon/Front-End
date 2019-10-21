import React from "react";
import Login from "./Login";
import Register from "./Register";
import MoveButtons from "./MoveButtons";

function App() {
  return (
    <div className="App">
      <p>Login</p>
      <Login />
      <p>Register</p>
      <Register />
      <p>Move Buttons</p>
      <MoveButtons />
    </div>
  );
}

export default App;
