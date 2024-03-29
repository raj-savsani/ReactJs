import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends PureComponent {
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
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}

      <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp;
