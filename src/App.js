// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Archive from "./Archive";
import Items from "./Items";
import Dashboard from "./Dashboard";
import TowerName from "./TowerName"
import CustomTower from "./CustomTower";
import WordsAdded from "./WordsAdded";
import ViewCustomWords from "./ViewCustomWords";
import ViewCustomTower from "./ViewCustomTower";
import ViewParticipants from "./ViewParticipants";
import GenerateCode from "./GenerateCode";
import Inventory from "./Inventory";
import Shop from "./Shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/generate" element={<GenerateCode />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/viewparticipants" element={<ViewParticipants />} />
          <Route path="/viewtower" element={<ViewCustomTower />} />
          <Route path="/viewwords" element={<ViewCustomWords />} />
          <Route path="/tower" element={<CustomTower />} />
          <Route path="/words" element={<WordsAdded />} />
          <Route path="/input" element={<TowerName />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/items" element={<Items />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
