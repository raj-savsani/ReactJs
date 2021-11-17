import React, { Component } from "react";

class UserGreeeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
      return (
          this.state.isLoggedIn ? <div>Hello Raj</div> : <div>Hello Guest</div>
      )
    // let message

    // if (this.state.isLoggedIn) {
    //   message = <div>Hello Raj</div>;
    // } else {
    //   message = <div>Hello Guest</div>;
    // }

    // return <div>  {message}   </div> 
    // if (this.state.isLoggedIn) {
    //   return <div>Hello Raj</div>;
    // } else {
    //   return <div>Hello Guest</div>;
    // }
    return (
      <div>
        <div>Hello Raj</div>
        <div>Hello Guest</div>
      </div>
    );
  }
}

export default UserGreeeting;
