import React, { useState, createContext, useEffect } from "react";
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
import About from "./About";
import Logout from "./Logout";
import AdventureMode from "./AdventureMode";
import AccInfo from "./AccInfo";
import Loading from "./Loading";
import CreateAccount from "./CreateAccount";
import PlayCustom from "./PlayCustom";
import Login from "./Login";
import Inventory from "./Inventory";
import Shop from "./Shop";
import BandageInfo from "./BandageInfo";
import MedkitInfo from "./MedkitInfo";
import AdActivity from "./AdventureActivity";
import BattInfo from "./BattInfo";

export const Context = createContext();

function App() {
  const [words, setWords] = useState([{}]);


  const [userInfo, setUserInfo] = useState({
    username: localStorage.getItem("userID") || "",
    credit: localStorage.getItem("credit") || 0,
  });

  const handleLogin = (loggedInUsername, loggedInCredit) => {
    setUserInfo({
      username: loggedInUsername,
      credit: loggedInCredit,
    });
  };

  useEffect(() => {
    fetch('http://localhost:8080/word/getAllWord')
        .then(res => {
            if (!res.ok) {
                throw new Error(`Network response was not ok. Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setWords(data);
            
        })
        .then(data =>{
            console.log(words); 
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
        console.log(words); 
       
}, []);

  return (<>
    {/* {words[0].definition} */}
    <Context.Provider value = {[words]}>
    <Router>
      <Routes>
        {/* <Route path="/shop" element={<Shop />} /> */}

        <Route path="/" element={<Loading />} />

        <Route path="/account" element={<CreateAccount />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/"
          element={
            <Navigation username={userInfo.username} credit={userInfo.credit} />
          }
        >
          {/* <Route path="/" element={<TowerName />} /> */}
          <Route path="/inventory" element={<Inventory />} />

          <Route path="/enter-custom-tower" element={<CustomTower />} />
          <Route path="/play-custom" element={<PlayCustom />} />

          <Route path="/generate-code" element={<GenerateCode />} />
          <Route path="/viewparticipants" element={<ViewParticipants />} />
          <Route path="/viewtower" element={<ViewCustomTower />} />
          <Route path="/view-words-added" element={<WordsAdded />} />
          <Route path="/adventure" element={<AdventureMode />} />

          <Route path="/words" element={<WordsAdded />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/create-custom" element={<TowerName />} />
          <Route path="/added-custom-tower" element={<CustomTower />} />
          <Route path="/medkit" element={<MedkitInfo />} />
          <Route path="/accinfo" element={<AccInfo />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/items" element={<Inventory />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/game-tower1" element={<AdActivity />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
    </Context.Provider>
  </>);
}

export default App;
