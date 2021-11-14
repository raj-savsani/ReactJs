import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Raj" heroName="Batman">
          <p>This is Children porps</p>
        </Greet>
        <Greet name="Yagnik" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Chirag" heroName="Ironman" />
        
        <Welcome name="Raj" heroName="Batman"></Welcome>
        <Welcome name="Yagnik" heroName="Superman"></Welcome>
        <Welcome name="Chirag" heroName="Ironman"></Welcome>
      </div>
    );
  }
}

export default App;
