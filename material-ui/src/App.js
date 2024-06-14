// Import Routes and Route from react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";

// creating custom theme,.... refering from default theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
