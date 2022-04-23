import { Box } from "./Styledcomponents/styledComponents";
import React from "react";
import Dashboard from "./Components/Dashboard";
import Feed from "./Components/Feed";
import News from "./Components/News";
function AppBody() {
  return (
    <Box className="AppBody" justify="space-evenly">
      <Dashboard />
      <Feed />
      <News />
    </Box>
  );
}

export default AppBody;
