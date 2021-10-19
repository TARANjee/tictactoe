import React from 'react'
import Board from "./Components/Board";
import './styles/root.scss'

function App() {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
     <Board/>
    </div>
  );
}

export default App;
