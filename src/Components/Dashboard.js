import Text from "../Components/Title";
import { Avator, Box } from "../Styledcomponents/styledComponents";
import "./DashBoard.css";
function Dashboard() {
  return (
    <Box direction="column" height="80vh" flex="0.25" border="1px solid red">
      <div
        style={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          width: "80%",
          alignItems: "center",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <div className="Dashboard__top"></div>
        <Avator width="90px" height="90px">
          <img
            className="avator__image"
            src="images/self.jpg"
            alt="not found"
          />
        </Avator>
        <Text className="userName">shivam choudhary</Text>
        <p>chshivam815@gmail.com</p>
        <br /> <br />
        <div className="stats__wrapper">
          <p className="stats">
            Who viewed your profile <strong>27372</strong>
          </p>
          <p className="stats">
            views on your posts <strong>97786</strong>
          </p>
        </div>
        <div className="Dashboard__bottom">
          <h4 className="header">Recents</h4>

          <p  style={{width:"90%"}}>
            <strong style={{ marginRight: "1rem" ,color:"darkgrey"}}>#</strong> recent 1{" "}
          </p>
          <p style={{width:"90%"}} >
            <strong style={{ marginRight: "1rem",color:"darkgrey" }}>#</strong> recent 2{" "}
          </p>
          <p  style={{width:"90%"}}>
            <strong style={{ marginRight: "1rem",color:"darkgrey" }}>#</strong> recent 3{" "}
          </p>
          <p  style={{width:"90%"}}>
            <strong style={{ marginRight: "1rem",color:"darkgrey" }}>#</strong> recent 4{" "}
          </p>
        </div>
      </div>
    </Box>
  );
}

export default Dashboard;
