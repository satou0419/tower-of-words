// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Archive from "./Archive";
import Items from "./Items";
import Dashboard from "./Dashboard";
import TowerName from "./TowerName";
import CustomTower from "./CustomTower";
import WordsAdded from "./WordsAdded";
import ViewCustomWords from "./ViewCustomWords";
import ViewCustomTower from "./ViewCustomTower";
import ViewParticipants from "./ViewParticipants";
import GenerateCode from "./GenerateCode";
import Logout from "./Logout";
import AdventureMode from "./AdventureMode";
import AccInfo from "./AccInfo";
import Loading from "./Loading";
import CreateAccount from "./CreateAccount";
import PlayCustom from "./PlayCustom";
import Login from "./Login";
import Shop from "./Shop";
import Inventory from "./Inventory";
import Shop from "./Shop";
import AccInfo from "./AccInfo";
import BandageInfo from "./BandageInfo";
import MedkitInfo from "./MedkitInfo";
import BattInfo from "./BattInfo";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/shop" element={<Shop />} /> */}

        <Route path="/inventory" element={<Inventory />} />

        <Route path="/" element={<Loading />} />

        <Route path="/account" element={<CreateAccount />} />

        <Route path="/" element={<Navigation />}>
          {/* <Route path="/" element={<TowerName />} /> */}

          <Route path="/enter-custom-tower" element={<CustomTower />} />
          <Route path="/play-custom" element={<PlayCustom />} />

          <Route path="/generate" element={<GenerateCode />} />
          <Route path="/viewparticipants" element={<ViewParticipants />} />
          <Route path="/viewtower" element={<ViewCustomTower />} />
          <Route path="/viewwords" element={<ViewCustomWords />} />
          <Route path="/words" element={<WordsAdded />} />
          <Route path="/input" element={<TowerName />} />
          <Route path="/custom" element={<CustomTower />} />
          <Route path="/bandage" element={<BandageInfo />} />
          <Route path="/medkit" element={<MedkitInfo />} />
          <Route path="/battery" element={<BattInfo />} />
          <Route path="/accinfo" element={<AccInfo />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/items" element={<Items />} />
          <Route path="/home" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
