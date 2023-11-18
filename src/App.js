// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Archive from "./Archive";
import Items from "./Items";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import AdActivity from "./AdventureActivity";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/archive" element={<AdActivity />} />

          <Route path="/logout" element={<Logout />} />

          <Route path="/items" element={<Items />} />
          <Route path="/home" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
