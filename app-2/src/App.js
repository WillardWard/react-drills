import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      army: [
        "Stormcast",
        "Skaven",
        "Beasts of Chaos",
        "Fyreslayers",
        "Seraphon",
      ],
    };
  }
  render() {
    let armyList = this.state.army.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{armyList}</div>;
  }
}

export default App;
