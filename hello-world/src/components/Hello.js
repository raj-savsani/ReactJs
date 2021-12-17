import React from 'react';

const Hello = ()=>{
    // return (
    //     <div id="Hello" className="dummyClass">
    //         <h1>Hello Rk</h1>
    //     </div>
    // )

    return React.createElement('div',{id: 'hello', className: 'dummyClass'}, React.createElement('h1',null,'Hello Rk'));



}

export default Hello;