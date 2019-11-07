import React, { Component } from "react";
import Header from "./components/header";
import MemeGenerator from "./components/memeGenerator";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
