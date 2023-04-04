import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
    };
  }

  alertMessage = () => {
    alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.setState({ userName: e.target.value })}
        ></input>
        <input
          onChange={(e) => this.setState({ password: e.target.value })}
        ></input>
        <button onClick={this.alertMessage}>Login</button>
      </div>
    );
  }
}

export default Login;
