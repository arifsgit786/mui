import RightBar from "./Components/RightBar";
import Feed from "./Components/Feed";
import SideBar from "./Components/SideBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import NavBar from "./Components/NavBar";
import Add from "./Components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <NavBar />
        <Stack direction='row' spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>


  );
}

export default App;
