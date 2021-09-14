import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div class="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1436235668410273792/ozvPa2MO_400x400.jpg" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional; Enter image Url"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
