import React from "react";
import "../Sass/Homec.scss";
import PostStatus from "./Elements/Post";

export default function HomeC({ currentUser }) {
  return (
    <div className="home-component">
      <PostStatus currentUser={currentUser} />
    </div>
  );
}
