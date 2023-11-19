// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Archive from "./Archive";
import Items from "./Items";
import Dashboard from "./Dashboard";
import AccInfo from "./AccInfo";
import Logout from "./Logout";
import ItemInfo from "./ItemInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}> 
          <Route path="/" element={<ItemInfo />} />
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
