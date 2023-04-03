import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
    };
  }
  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={(e) => this.setState({ inputText: e.target.value })}
        ></input>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
