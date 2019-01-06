import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

class App extends Component {
  state = {data:{}};

  async componentDidMount() {
    const { data } = await axios.get(`${process.env.PUBLIC_URL}/api/hello`);

    this.setState({ data });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          data:
          <p>
            {JSON.stringify(this.state.data)}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
