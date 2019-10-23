import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import MoveButtons from './MoveButtons';
import Logout from './Logout';
import CurrentRoom from './CurrentRoom';
import WorldMap from './map/map';

function App() {
  const [currentRoom, setCurrentRoom] = useState({});

  return (
    <div className='App'>
      <p>Login</p>
      <Login />
      <p>Register</p>
      <Register />
      <p>Logout</p>
      <Logout />
      <p>Current Room</p>
      <CurrentRoom currentRoom={currentRoom} />
      <p>Move Buttons</p>
      <MoveButtons setCurrentRoom={setCurrentRoom} />
      <WorldMap />
    </div>
  );
}

export default App;
