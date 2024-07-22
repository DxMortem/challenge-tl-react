import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function HolaMundo() {
    return (
      <div id="holamundo" className="text-center text-red-500">
        Hola Mundo
      </div>
    );
  }

  return (
    <>
      <HolaMundo />
    </>
  );
}

export default App;
