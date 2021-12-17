import React from "react";

// function Greet(){
//     return <h1>Hello Raj</h1>
// }

const Greet = ({name , heroName}) => {
  // console.log('props:', props)

  return (
    <div>
      <h1>
        Hey... {name} a.k.a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
