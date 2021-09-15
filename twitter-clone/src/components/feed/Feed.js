import React, { useState, useEffect } from "react";
import TweetBox from "../tweetbox/TweetBox";
import Post from "../post/Post";
import "./Feed.css";
import db from "../../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("id", "desc")
      .onSnapshot(
        (
          snapshot // look for docs inside Posts Collection
        ) => setPosts(snapshot.docs.map((doc) => doc.data())) // Take a snapshot of the db and map to get all docs (posts)
      ); // data are all infos of posts
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            timestamp={post.timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
