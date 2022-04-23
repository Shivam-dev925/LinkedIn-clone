import React from "react";
import UPloaderWrapper from "../Components/UPloaderWrapper";
import { Send } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import { Flex } from "../Styledcomponents/styledComponents";
import Avatar from "../Components/Avatar";
import Text from "../Components/Title";

function IndivdualPosts(props) {
  const IncomingPosts = props.Posts;

  return (
    <Flex
      style={{
        width: "100%",
        border: "0.05rem solid #D3D3D3",
        borderRadius: "0.5rem",
      }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      {IncomingPosts?.length > 0 ? (
        IncomingPosts.map((post, idx) => {
          return (
            <li key={idx} style={{ width: "100%", padding: "1rem" }}>
              <Flex justify="space-between" className="Posts__upper">
                <Flex>
                  <Avatar />
                  <Text weight="500" marginLeft="10px" font="20px">
                    shivam choudhary
                  </Text>
                </Flex>
                <MoreHorizIcon />
              </Flex>

              <p title={post} className="posts__para">
                {post}
              </p>

              <img
                className="posts__image__Uploaded"
                src="images/t.jpg"
                alt="not uploaded"
              />
              <UPloaderWrapper
                forFeedPosts
                title1="like"
                title2="share "
                title3="send"
                title4="comment"
                icon1={ThumbUpIcon}
                icon2={ShareIcon}
                icon3={Send}
              />
            </li>
          );
        })
      ) : (
        <>
          <img src="images/no posts.png" alt="no posts uploaded" />
          <Text>no posts</Text>
        </>
      )}
    </Flex>
  );
}

export default IndivdualPosts;
