import React from "react";
import "./App.css";
import { Neon } from "./components/Neon";

function App() {
  return (
    <div className="App">
      <Neon color={Neon.color.DEFAULT}>Neon 理想</Neon>
      <Neon color={Neon.color.RED}>Neon 紅</Neon>
      <Neon color={Neon.color.GREEN}>Neon 綠</Neon>
      <Neon color={Neon.color.BLUE}>Neon 藍</Neon>
    </div>
  );
}

export default App;
