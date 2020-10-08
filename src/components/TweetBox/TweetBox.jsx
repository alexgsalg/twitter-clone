import React, { useState } from "react";
import "./TweerBox.css";
import { Avatar } from "@material-ui/core";

//Icons
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import EventIcon from "@material-ui/icons/Event";
import db from "../../Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayname: "Alex Salgado",
      username: "alexgsalg",
      verified: false,
      avatar:
        "https://pbs.twimg.com/profile_images/1190679590106271744/kVVqNj4Z_400x400.jpg",
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <form className="tweetbox">
      <Avatar
        className="tweetbox__avatar"
        src="https://pbs.twimg.com/profile_images/1190679590106271744/kVVqNj4Z_400x400.jpg"
      />
      <div className="tweetbox__actions">
        <textarea
          className="tweetbox__input"
          placeholder="What's happening?"
          value={tweetMessage}
          onChange={(e) => setTweetMessage(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="tweetbox__input"
          placeholder="Enter image url"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <div className="tweetbox__icons">
          <CropOriginalIcon />
          <GifIcon />
          <EqualizerIcon className="charticon" />
          <SentimentSatisfiedIcon />
          <EventIcon />
        </div>
        <button onClick={sendTweet} className="tweetbox__submit">
          Tweet
        </button>
      </div>
    </form>
  );
}

export default TweetBox;
