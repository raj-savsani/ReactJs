import React from "react";
import Person from "./Person";

function Namelist() {
  // const names = ['Raj','Tilak','Chirag']
  const persons = [
    { id: 1, name: "Raj", age: 25, skill: "React" },
    { id: 1, name: "Tilak", age: 26, skill: "Javascript" },
    { id: 1, name: "Chirag", age: 27, skill: "NodeJS" },
  ];
  const personList = persons.map((person) => <Person person={person}></Person>);
  return (
    <div>
      {/* <h2>{names[0]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[1]}</h2> */}
      {/* {
                names.map(name=><h2>{name}</h2>)
            } */}
            {personList}
    </div>
  );
}

export default Namelist;
