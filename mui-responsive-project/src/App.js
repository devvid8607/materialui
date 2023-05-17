// import logo from './logo.svg';
// import "./App.css";

import { Box, Stack } from "@mui/material";
import { Feed } from "./components/Feed";
import { LeftSidebar } from "./components/LeftSidebar";
import { Navbar } from "./components/Navbar";
import { RightSidebar } from "./components/RightSidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </Stack>
    </Box>
  );
}

export default App;
