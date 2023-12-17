import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Archive from "./Archive";
import Inventory from "./Inventory";
import Dashboard from "./Dashboard";
import TowerName from "./TowerName";
import CustomTower from "./CustomTower";
import WordsAdded from "./WordsAdded";
import ViewCustomTower from "./ViewCustomTower";
import ViewParticipants from "./ViewParticipants";
import GenerateCode from "./GenerateCode";
import AdventureMode from "./AdventureMode";
import AccInfo from "./AccInfo";
import Loading from "./Loading";
import CreateAccount from "./CreateAccount";
import PlayCustom from "./PlayCustom";
import Login from "./Login";
import Shop from "./Shop";
import MedkitInfo from "./MedkitInfo";
import AdActivity from "./AdventureActivity";
import Landing from "./Landing";
import CustomTowerGame from "./CustomTowerGame";

export const Context = createContext();
function App() {
  const [words, setWords] = useState([]);
  const [userInfo, setUserInfo] = useState(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    return storedUserInfo
      ? JSON.parse(storedUserInfo)
      : {
          userIDRef: 0,
          progress: 0,
          credit: 0,
          user: {
            userID: 0,
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            userArchive: {
              userIDRef: 0,
              words: [],
            },
          },
          userItems: [
            {
              userItemID: 0,
              quantity: 0,
              item: {
                itemID: 0,
                imagePath: "",
                itemName: "",
                itemDescription: "",
                price: 0,
              },
            },
          ],
        };
  });
  const handleLogin = (loggedInUsername, loggedInCredit) => {
    console.log("Username:", loggedInUsername);
    console.log("Credit:", loggedInCredit);
    const updatedUserInfo = {
      ...userInfo,
      user: {
        ...userInfo.user,
        username: loggedInUsername,
      },
      credit: loggedInCredit,
    };
    setUserInfo(updatedUserInfo);
    // Save user info to localStorage
    localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
  };
  useEffect(() => {
    // Fetch user details
    fetch("http://localhost:8080/watataps/users/getAllUsersDetails/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((userDetails) => {
        const loggedInUser = userDetails.find(
          (userDetail) => userDetail.user.username === userInfo.user.username
        );
        if (loggedInUser) {
          const updatedUserInfo = {
            userIDRef: loggedInUser.userIDRef,
            progress: loggedInUser.progress,
            credit: loggedInUser.credit,
            user: {
              userID: loggedInUser.user.userID,
              firstname: loggedInUser.user.firstname,
              lastname: loggedInUser.user.lastname,
              username: loggedInUser.user.username,
              password: loggedInUser.user.password,
              userArchive: {
                userIDRef: loggedInUser.user.userArchive.userIDRef,
                words: loggedInUser.user.userArchive.words || [],
              },
            },
            userItems: loggedInUser.userItems || [],
          };
          console.log("Logged In ID " + loggedInUser.user.userID);
          setUserInfo(updatedUserInfo);
          // Save user info to localStorage
          localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
          console.log(userDetails);
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
    // Fetch words
    fetch("http://localhost:8080/word/getAllWord")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWords(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <Context.Provider value={[words, userInfo, handleLogin]}>
      <Router>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/account" element={<CreateAccount />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Navigation />}>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/enter-custom-tower" element={<CustomTower />} />
            <Route path="/play-custom" element={<PlayCustom />} />
            <Route path="/viewparticipants" element={<ViewParticipants />} />
            <Route path="/viewtower" element={<ViewCustomTower />} />
            <Route path="/view-words-added" element={<WordsAdded />} />
            <Route path="/adventure" element={<AdventureMode />} />
            <Route path="/adventure/:towid" element={<AdActivity />} />
            <Route path="/words" element={<WordsAdded />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/create-custom" element={<CustomTower />} />
            <Route path="/medkit" element={<MedkitInfo />} />
            <Route path="/accinfo" element={<AccInfo />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/items" element={<Inventory />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/enter-code" element={<CustomTower />} />
            <Route path="/custom-game" element={<CustomTowerGame />} />
            <Route path="/generate-code/:gamecode" element={<GenerateCode />} />
            <Route path="/viewtower" element={<ViewCustomTower />} />
          </Route>
        </Routes>
      </Router>
    </Context.Provider>
  );
}
export default App;
