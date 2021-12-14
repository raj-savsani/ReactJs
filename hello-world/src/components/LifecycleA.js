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
  render() {
    console.log("LifeCycleA from render");
    return <div>LifeCycleA
        <LifeCycleB></LifeCycleB>
    </div>;
  }

}

export default LifecycleA;
