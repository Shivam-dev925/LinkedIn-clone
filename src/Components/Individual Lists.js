import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Navigators() {
  const NavigatorData = [
    {
      title: "Home",
      icon: HomeIcon,
    },

    {
      title: "My Network",
      icon: PeopleIcon,
    },
    {
      title: "Jobs",
      icon: WorkIcon,
    },
    {
      title: "Messaging",
      icon: ChatBubbleIcon,
    },
    {
      title: "Notifications",
      icon: NotificationsIcon,
    },
  ];

  return (
    <ul className="Header__ul">
      {NavigatorData?.map((Navigator, idx) => {
        return (
          <li key={idx}>
            <Navigator.icon />
            {Navigator.title}
          </li>
        );
      })}
    </ul>
  );
}

export const Uploaders = () => {
  const UploadersData = [
    {
      title: "Photo",
      icon: HomeIcon,
      color: "skyblue",
    },

    {
      title: "Video",
      icon: PeopleIcon,
      color: "green",
    },
    {
      title: "Event",
      icon: WorkIcon,
      color: "orange",
    },
    {
      title: "Write article",
      icon: ChatBubbleIcon,
      color: "lightPink",
    },
  ];

  return (
    <>
      {UploadersData?.map((uploader, idx) => {
        return (
          <li
            draggable
            className="uploaderlist"
            style={{ flexDirection: "row" }}
            key={idx}
          >
            <uploader.icon
              style={{
                color: uploader.color,
              }}
            />
            {uploader.title}
          </li>
        );
      })}
    </>
  );
};

export default Navigators;
