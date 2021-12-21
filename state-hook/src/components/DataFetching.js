import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idfrombutton, setIdfrombutton] = useState(1);
  const clickHandler = ()=>{
    setIdfrombutton(id)
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idfrombutton]);
  return (
    <div>
      <input
        type="number"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <button onClick={clickHandler}>Fetch post</button>
      <ul>
        <li key={posts.id}>{posts.title}</li>
      </ul>
    </div>
  );
}

export default DataFetching;
