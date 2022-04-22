import React from "react";
import { Avator } from "../Styledcomponents/styledComponents";
function Avatar({ width, height }) {
  return (
    <Avator width={width} height={height}>
      <img className="avator__image" src="images/self.jpg" alt="not found" />
    </Avator>
  );
}

export default Avatar;
