// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Archive from "./Archive";
import Items from "./Items";
import Dashboard from "./Dashboard";
import AccInfo from "./AccInfo";
import Logout from "./Logout";
import BandageInfo from "./BandageInfo";
import MedkitInfo from "./MedkitInfo";
import BattInfo from "./BattInfo";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}> 
          <Route path="/bandage" element={<BandageInfo />} />
          <Route path="/medkit" element={<MedkitInfo />} />
          <Route path="/battery" element={<BattInfo />} />
          <Route path="/accinfo" element={<AccInfo />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/items" element={<Items />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
