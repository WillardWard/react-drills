import React, { Component } from "react";
import Todo from "./Todo";

class List extends Component {
  render() {
    let taskList = this.props.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return <div>{taskList}</div>;
  }
}

export default List;
