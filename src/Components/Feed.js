import { useCallback, useState } from "react";

import { Box, Flex } from "../Styledcomponents/styledComponents";
import Avatar from "./Avatar";
import IndividualPosts from "../Individual Components/IndivdualPosts";
import "./Feed.css";

import UPloaderWrapper from "./UPloaderWrapper";
import FeedInputWrapper from "./FeedInputWrapper";
function Feed() {
  const [PostValue, setPostValue] = useState("");
  const [Posts, setPosts] = useState([]);

  const HandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (PostValue) {
        setPosts((oldpost) => [...oldpost, PostValue]);
      }
      setPostValue("");
    },
    [PostValue]
  );



  return (
    <Box className="Feed" direction="column" flex="0.5" justify="start">
      <Flex
        style={{ border: "0.05rem solid #D3D3D3" }}
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
          <Avatar height="50px" width="50px" />
          <FeedInputWrapper
            setPostValue={setPostValue}
            HandleSubmit={HandleSubmit}
          />
        </div>

        <UPloaderWrapper forFeedTop />
      </Flex>
      <Box
        radius="0.5rem"
        background="white"
        className={Posts.length===0?"noPosts":"Posts"}
        alignItems="start"
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            background: "white",
            borderRadius: "0.5rem",
          }}
        >
          <IndividualPosts Posts={Posts} />
        </ul>
      </Box>
    </Box>
  );
}

export default Feed;
