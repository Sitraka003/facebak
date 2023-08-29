import React, { useState, useEffect } from "react";
import "./1-post-list.css";
import { PostIteme } from "./post-item.jsx";
import { Suggestion } from "./suggestion";
import { fetchPostData } from "../../data/postData.js";

export function PostList() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPostData();
      if (data) {
        setPostData(data);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="post-list-container">
      <div className="post-list-space">
        {postData.map((post) => (
          <PostIteme key={post.id} postData={post} />
        ))}
      </div>
      <div className="post-suggest-container">
        <Suggestion />
      </div>
    </div>
  );
}