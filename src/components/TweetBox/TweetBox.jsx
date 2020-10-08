import React from "react";
import "./TweerBox.css";
import { Avatar } from "@material-ui/core";

//Icons
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import EventIcon from "@material-ui/icons/Event";

function TweetBox() {
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
        ></textarea>
        <div className="tweetbox__icons">
          <CropOriginalIcon />
          <GifIcon />
          <EqualizerIcon className="charticon" />
          <SentimentSatisfiedIcon />
          <EventIcon />
        </div>
        <button className="tweetbox__submit">Tweet</button>
      </div>
    </form>
  );
}

export default TweetBox;
