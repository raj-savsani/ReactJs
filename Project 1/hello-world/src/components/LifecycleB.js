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
  shouldComponentUpdate() {
    console.log("LifecycleB from ShouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB from GetSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB from ComponentDidUpdate");
  }
  render() {
    console.log("LifeCycleB from render");
    return <div>LifeCycleB</div>;
  }
}

export default LifecycleB;
