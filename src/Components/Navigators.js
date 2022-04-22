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

export default Navigators;
