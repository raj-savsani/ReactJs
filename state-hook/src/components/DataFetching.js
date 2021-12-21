import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      <input
        type="number"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <ul>
        <li key={posts.id}>{posts.title}</li>
      </ul>
    </div>
  );
}

export default DataFetching;
