import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

const FullPost=()=>{
    const [post,setPost]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>setPost(res.data));
    },[id])
return(
    <article>
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
    <div>
        <Link to='/post'>back to post</Link>
    </div>
</article>
)
}

export default FullPost;