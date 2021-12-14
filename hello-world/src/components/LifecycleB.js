import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj Savsani",
    };
    console.log("LifeCycleB from Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB from getDerivedStateFromProps");
    return null;
  }
  
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
  render() {
    console.log("LifeCycleB from render");
    return <div>LifeCycleB</div>;
  }

}

export default LifecycleB;
