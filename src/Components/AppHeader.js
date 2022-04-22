import { Nav, Avator } from "../Styledcomponents/styledComponents";
import "./AppHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import Navigators from "./Navigators";

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
      <Avator>
        <img className="avator__image" src="images/self.jpg" alt="not found" />
      </Avator>
    </Nav>
  );
}

export default AppHeader;
