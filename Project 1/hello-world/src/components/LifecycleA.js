import React, { Component } from "react";
import LifeCycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj Savsani",
    };
    console.log("LifeCycleA from Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA from getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA from ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA from GetSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA from ComponentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Raj"
    });
  };

  render() {
    console.log("LifeCycleA from render");
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifecycleA;
