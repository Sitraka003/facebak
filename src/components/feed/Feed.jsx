import React from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import TestPost from "./TestPost";
import "./feed.css";

function Feed() {
  return (
    <div className="feedContainer">
      <NewPost />
      <TestPost />
    </div>
  );
}

export default Feed;
