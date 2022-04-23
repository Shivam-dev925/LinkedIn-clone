import React from "react";
import { Uploaders } from "../Individual Components/Individual Lists";
function UPloaderWrapper({
  forFeedPosts,
  forFeedTop,
  title1,
  title2,
  title3,
  title4,
  icon1,
  icon2,
  icon3,
}) {
  return (
    <div
      className={
        forFeedTop
          ? "Uploaders__wrapper"
          : forFeedPosts
          ? "updated__Uploaders__wrapper"
          : null
      }
    >
      <ul className="Header__ul">
        <Uploaders
          title1={title1}
          title2={title2}
          title3={title3}
          title4={title4}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
        />
      </ul>
    </div>
  );
}

export default UPloaderWrapper;
