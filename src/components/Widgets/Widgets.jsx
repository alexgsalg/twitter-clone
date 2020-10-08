import React from "react";
import "./Widgets.css";
//icons
import SearchIcon from "@material-ui/icons/Search";

import FollowUser from "../FollowUser/FollowUser";

function Widgets() {
  return (
    <div className="widgets">
      <form className="widgets__search">
        <SearchIcon />
        <input
          type="text"
          className="widgets__input"
          placeholder="Search Twitter"
        />
      </form>
      <div className="widgets__box">
        <h2 className="widgets__title">Widgets</h2>
        <FollowUser
          displayname="Mike"
          username="@NoobTelevision"
          avatar="https://pbs.twimg.com/profile_images/1275271685403443201/uwyM4JZR_400x400.jpg"
        />
        <FollowUser
          displayname="LoL Esports"
          verified
          username="@lolesports"
          avatar="https://pbs.twimg.com/profile_images/1309363335364837376/1In14Jfu_400x400.jpg"
        />
        <button className="widgets__boxMore">Show more</button>
      </div>
    </div>
  );
}

export default Widgets;
