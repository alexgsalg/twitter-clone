import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="section-header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <div className="feed__timeline">
        {posts.map((post) => (
          <Post
            key={post.text}
            avatar={post.avatar}
            displayname={post.displayname}
            verified={post.verified}
            username={post.username}
            text={post.text}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
