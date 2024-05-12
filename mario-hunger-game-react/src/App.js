import { useState } from "react";
import { Game } from "./components/Game";
import { Context } from "./context/Context";
import "./App.css";

function App() {
  const [size, setSize] = useState({ rows: 5, cols: 5 });
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="App">
      <h1>Mario Hunger Game</h1>
      <Context.Provider
        value={{ size, setSize, isGameStarted, setIsGameStarted }}
      >
        <Game />
      </Context.Provider>
    </div>
  );
}

export default App;
