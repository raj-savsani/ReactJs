import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Inc() {
    //   this.setState({
    //       count: this.state.count+1
    //   },()=>{ console.log("callback Value",this.state.count)})
    this.setState(prevState =>({
        count:prevState.count+1
    }))
    
    //   console.log('this.state.count:', this.state.count)
  }

  IncFive(){
      this.Inc();
      this.Inc();
      this.Inc();
      this.Inc();
      this.Inc();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.IncFive()}>Increment</button>
      </div>
    );
  }
}

export default counter;
