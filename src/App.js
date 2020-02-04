import React from "react";
import Button from "./components/Buttton";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Button title="RIGHT HERE!!!" />
            <Button title="AYOO!!!" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Jumbotron />
          </div>
          <div className="col">
            <Jumbotron />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
