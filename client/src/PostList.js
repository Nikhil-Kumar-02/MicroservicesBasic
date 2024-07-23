import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://posts.com/posts");
      setPosts(res.data);
      console.log("the posts recieved " , res.data);
    } catch (error) {
      console.log("error in postlist " , error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div >
          <hr></hr>
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
          <br></br>
        </div>
      </div>
    );
  });

  return (
    <div>
      {renderedPosts}
    </div>
  );
};

export default PostList;
