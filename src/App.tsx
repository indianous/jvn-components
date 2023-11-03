import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Badge from "./components/badge";

function App() {
  return (
    <div className="App">
      <div
        style={{
          borderRadius: 50,
          padding: 8,
          position: "relative",
          margin: "auto",
          backgroundColor: "gray",
        }}
      >
        Teste
        <Badge value={1000} />
      </div>
    </div>
  );
}

export default App;
