import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todoList: [],
    };
  }

  addItem = () => {
    let currList = this.state.todoList;
    currList.push(this.state.newItem);
    this.setState({ newItem: "", todoList: currList });
  };

  render() {
    let taskList = this.state.todoList.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input
          value={this.state.newItem}
          placeholder="Enter new task"
          onChange={(e) => this.setState({ newItem: e.target.value })}
        ></input>
        <button onClick={this.addItem}>Add</button>
        {taskList}
      </div>
    );
  }
}

export default App;
