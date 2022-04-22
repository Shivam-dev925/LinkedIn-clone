import { useState } from "react";
import { Search } from "@mui/icons-material";
import { Box, Flex } from "../Styledcomponents/styledComponents";
import Avatar from "./Avatar";
import { Uploaders } from "./Individual Lists";
import "./Feed.css";
function Feed() {
  const [PostValue, setPostValue] = useState("");

  const OnChange = (e) => {
    let updatedValue = e.target.value;
    setPostValue(updatedValue);
  };
 
  return (
    <Box
      className="Feed"
      direction="column"
      height="100%"
      flex="0.5"
      border="1px solid red"
      justify="start"
    >
      <Flex
        className="wrapper"
        width="100%"
        height="140px"
        justify="center"
        direction="column"
      >
        <div
          style={{
            width: "100%",
            height: "50%",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Avatar height="60px" width="60px" />
          <Flex justify="start" className="Feed__inputwrapper">
            <Search />
            <input
              value={PostValue}
              onChange={OnChange}
              placeholder="Start a Post"
            />
          </Flex>
        </div>

        <div className="Uploaders__wrapper">
          <ul className="Header__ul">
            <Uploaders />
          </ul>
        </div>
      </Flex>
    </Box>
  );
}

export default Feed;
