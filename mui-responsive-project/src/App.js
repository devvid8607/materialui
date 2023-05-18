// import logo from './logo.svg';
// import "./App.css";

import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Feed } from "./components/Feed";
import { LeftSidebar } from "./components/LeftSidebar";
import { Navbar } from "./components/Navbar";
import { RightSidebar } from "./components/RightSidebar";
import AddPost from "./components/AddPost";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darktheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darktheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftSidebar mode={mode} setMode={setMode} />
          <Feed />
          <RightSidebar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
