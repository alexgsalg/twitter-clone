import { Avatar } from "@material-ui/core";
import React from "react";
import "./FollowUser.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function FollowUser({ avatar, displayname, verified, username }) {
  return (
    <div className="followUser">
      <Avatar src={avatar} className="followUser__avatar" />
      <div className="followUser__user">
        <div>
          <h3 className="followUser__displayname">{displayname}</h3>
          {verified && <CheckCircleIcon className="followUser__verified" />}
        </div>
        <p className="followUser__username">{username}</p>
      </div>
      <button className="followUser__button">Follow</button>
    </div>
  );
}

export default FollowUser;
