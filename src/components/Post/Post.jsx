import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Post({
  avatar,
  displayname,
  username,
  verified,
  timestamp,
  text,
  image,
}) {
  return (
    <div className="post">
      <Avatar src={avatar} className="post__avatar" />
      <div className="post__content">
        <div className="post__info">
          <h3 className="post__displayname">{displayname}</h3>
          {verified && <CheckCircleIcon className="post__verified" />}
          <p className="post__username">{username}</p>
          <span className="post__timestamp"> · {timestamp}</span>
        </div>
        <p className="post__text">{text}</p>
        <img src={image} className="post__thumb" alt={username} />
      </div>
    </div>
  );
}

export default Post;
