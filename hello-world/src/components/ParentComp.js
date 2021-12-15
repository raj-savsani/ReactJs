import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "raj",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "raj",
      });
    }, 2000);
  }

  render() {
      console.log("**********parent Component rendered**********")
    return (
      <div>
        Praent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
