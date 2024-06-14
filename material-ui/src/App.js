// Import Routes and Route from react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
