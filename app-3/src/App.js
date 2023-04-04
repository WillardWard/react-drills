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
      filterArmy: "",
    };
  }

  handleChange(filter) {
    this.setState({ filterArmy: filter });
  }

  render() {
    let armyList = this.state.army
      .filter((element, index) => {
        return element.toLowerCase().includes(this.state.filterArmy);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      <div className="App">
        <input
          onChange={(e) => this.handleChange(e.target.value)}
          type="text"
        />
        {armyList}
      </div>
    );
  }
}

export default App;
