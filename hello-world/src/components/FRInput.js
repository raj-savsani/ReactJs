import React from "react";

// function FRInput() {
//     return (
//         <div>

//         </div>
//     )
// }

const FRInput = React.forwardRef((props, ref) => {
    return (
      <div>
        <input type="text" ref={ref}></input>
      </div>
    );
  }) 

export default FRInput;
