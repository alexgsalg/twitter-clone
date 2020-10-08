import React from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="section-header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Tweet */}
      <Post
        avatar="https://pbs.twimg.com/profile_images/1311757881734295553/ejB79Dxu_400x400.jpg"
        displayname="TecMundo"
        verified
        timestamp="12h"
        username="@Tec_Mundo"
        text="Juiz homologou estratégia da empresa e rejeitou pedidos de adiamento de bancos; saiba mais! #tecmundo"
        image="https://pbs.twimg.com/media/EjumIJNXsAAZhCq?format=jpg&name=small"
      />

      <Post
        avatar="https://pbs.twimg.com/profile_images/1311757881734295553/ejB79Dxu_400x400.jpg"
        displayname="TecMundo"
        verified
        timestamp="12h"
        username="@Tec_Mundo"
        text="Juiz homologou estratégia da empresa e rejeitou pedidos de adiamento de bancos; saiba mais! #tecmundo"
        image="https://pbs.twimg.com/media/EjumIJNXsAAZhCq?format=jpg&name=small"
      />

      <Post
        avatar="https://pbs.twimg.com/profile_images/1311757881734295553/ejB79Dxu_400x400.jpg"
        displayname="TecMundo"
        verified
        timestamp="12h"
        username="@Tec_Mundo"
        text="Juiz homologou estratégia da empresa e rejeitou pedidos de adiamento de bancos; saiba mais! #tecmundo"
        image="https://pbs.twimg.com/media/EjumIJNXsAAZhCq?format=jpg&name=small"
      />
    </div>
  );
}

export default Feed;
