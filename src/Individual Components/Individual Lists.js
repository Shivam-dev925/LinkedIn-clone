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

export const Uploaders = (props) => {
  const UploadersData = [
    {
      title: props.title1 ? props.title1 : "Photo",
      icon: props.icon1 ? props.icon1 : HomeIcon,
      color: "skyblue",
    },

    {
      title: props.title2 ? props.title2 : "Video",
      icon: props.icon2 ? props.icon2 : PeopleIcon,
      color: "green",
    },
    {
      title: props.title3 ? props.title3 : "Event",
      icon: props.icon3 ? props.icon3 : WorkIcon,
      color: "orange",
    },
    {
      title: props.title4 ? props.title4 : "Write article",
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
