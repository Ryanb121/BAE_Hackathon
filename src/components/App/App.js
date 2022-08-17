import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import League from "../League/Leauge";
import Emission from "../Emissions/Emissions";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/leagueTable" element={<League />} />
          <Route path="/emission" element={<Emission />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
