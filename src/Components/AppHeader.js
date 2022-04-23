import { Nav } from "../Styledcomponents/styledComponents";
import "./AppHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import Navigators from "../Individual Components/Individual Lists";
import Avatar from "./Avatar";

function AppHeader() {
  return (
    <Nav>
      <img className="HeaderLogo" src="images/linkedin.webp" alt="" />
      <div className="InputWrapper">
        <SearchIcon style={{ marginLeft: "2px" }} />
        <input placeholder="Search" />
      </div>
      <div className="Navigator__Wrappers">
        <Navigators />
      </div>
      <Avatar />
    </Nav>
  );
}

export default AppHeader;
