import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = () => {
  const [text, setText] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((x) => setText(x.data));
  });
  //   console.log(text)
  return (
    <article>
    {text.slice(0,10).map((post) =>(
        <ul key={post.id}>
            <Link to={`/post/${post.id}`}>
                <li>{post.title}</li>
            </Link>
            <p>{post.body}</p>
        </ul>
    ))}
      
    </article>
  );
};
export default Post;
