import React from "react";

// function Greet(){
//     return <h1>Hello Raj</h1>
// }

const Greet = (props) => {
  // console.log('props:', props)

  return (
    <div>
      <h1>
        Hey... {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
