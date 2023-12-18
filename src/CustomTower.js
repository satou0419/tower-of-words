import { useNavigate } from 'react-router-dom';
import "./CustomTower.css";
import "./root.css";
import "@fontsource/lilita-one";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "./App";

function CustomTower() {
    const [dataTower, setDataTower] = useState([]);
    const [words, setWords] = useState([]);
    const [towerName, setTowerName] = useState("");
    const navigate = useNavigate();
    const [added, setAdded] = useState([]);
    const [existingGameCode, setExistingGameCode] = useState([]);
    const [wordID, setWordID] = useState([]);
    const [addedID, setAddedID] = useState([]);
    const [word, userInfo, handleLogin] = useContext(Context);
    const [clickedWord, setClickedWord] = useState(null);
    const [clickedAddedWord, setClickedAddedWord] = useState(null);
    const [searchWords, setSearchWords] = useState("");
    const [filteredWords, setFilteredWords] = useState([]);

    console.log(userInfo);

    const imagePath_1 = "enemy-crab-type.png"

    const imagePath_2 = "enemy-spring-type.png"
    console.log(existingGameCode)
    
    function generateUniqueGameCode() {
      const timestamp = new Date().getTime().toString(36);
      const randomString = Math.random().toString(36).substr(2, 5);
      const newGameCode = `${userInfo.userIDRef}-${timestamp}${randomString}`.toUpperCase();
      
      if (existingGameCode.includes(newGameCode)) {
        return generateUniqueGameCode(existingGameCode);
      }

      return newGameCode;
    }

  const handleInsert = () => {
    if (towerName.trim() === "") {
      alert("Tower name cannot be blank.");
      return;
    }

    const customTowerData = {
      towername: towerName,
      creator: userInfo.userIDRef,
      gamecode: generateUniqueGameCode(),
      participantslist: [],
      enemylist: addedID.map((id, index) => {
        const randomImagePath = Math.random() < 0.5 ? imagePath_1 : imagePath_2;
        const enemyName = randomImagePath === imagePath_1 ? "crab" : "spring";
    
        return {
          name: enemyName,
          wid: id,
          imagePath: randomImagePath,
        };
      }),
    };

    if (added.length !== 10) {
      alert('There must be exactly 10 enemies.');
      return;
    }

    console.log(customTowerData);

    fetch('http://localhost:8080/CustomTower/insertCustomTower', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customTowerData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(insertedData => {
        console.log('Insert successful:', insertedData);
        setDataTower([...dataTower, customTowerData]);

        navigate(`/generate-code/${customTowerData.gamecode}`);
      })
      .catch(error => {
        console.error('There was a problem with the insert operation:', error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:8080/CustomTower/getAllCustomTower')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        
        setExistingGameCode(data.map((tower) => tower.gamecode));
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  },[]);

  useEffect(() => {
      fetch('http://localhost:8080/word/getAllWord')
      .then(response => {
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
          
          setWords(data.map((word) => word.word));
          setFilteredWords(data.map((word) => word.word));
          setWordID(data.map(word => word.wordID));
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
  },[]);

  const handleWordClick = (index) => {
    const clickedWordIndex = filteredWords.indexOf(filteredWords[index]);

    setClickedWord(clickedWordIndex);
  };

  const handleAddButtonClick = () => {
    if (clickedWord !== null) {
      const selectedWord = filteredWords[clickedWord];
      const selectedWordID = words.indexOf(filteredWords[clickedWord]) + 1;
      if (added.length < 10) {
        addWord(selectedWord, selectedWordID);
      } else {
        alert("You can only add up to 10 words to the enemy list.");
      }
      setClickedWord(null);
    }
  };

  const handleAddedWordClick = (index) => {
    const newClickedAddedWord = index === clickedAddedWord ? null : index;
    
    setClickedAddedWord(newClickedAddedWord);
  };

  const wordSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchWords(searchTerm);
    setClickedWord(null);

    const filtered = words.filter((word) =>
      word.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWords(filtered);
  };


  const addWord = (newWord, newWordID) => {
    if (!added.includes(newWord)) {
      const isConfirmed = window.confirm(
        `Are you sure you want to add "${newWord}"?`
      );
      
      console.log(newWord)
      console.log(newWordID)

      if (isConfirmed) {
        const newArray = [...added, newWord];
        const newAddedID = [...addedID, newWordID];
        setAdded(newArray);
        setAddedID(newAddedID);
      } else {
        console.log(`Adding "${newWord}" was canceled by the user.`);
      }
    } else {
      alert(`"${newWord}" is already added.`);
    }
  };

  const removeWord = (index) => {
    if (index === null || index === undefined) {
      alert("No word clicked to remove.");
      return;
    }

    const wordToRemove = added[index];
    const isConfirmed = window.confirm(
      `Are you sure you want to remove "${wordToRemove}"?`
    );
    
    if (isConfirmed) {
      setAdded((prevAdded) => {
        const newArray = [...prevAdded];
        newArray.splice(index, 1);
        setClickedAddedWord(null);
        console.log(added);
        return newArray;
      });
      setAddedID((prevAddedID) => {
        const newAddedID = [...prevAddedID];
        newAddedID.splice(index, 1);
        return newAddedID;
      });
    } else {
      console.log(`Removing "${wordToRemove}" was canceled by the user.`);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="main-customtower">
        <div className="customtower-top-container">
          <button className="btn-back btn-back-customtower" onClick={goBack}>BACK</button>
          <input
            className="inputs inputs-towername"
            type="text"
            placeholder="Input Tower Name"
            value={towerName}
            onChange={(e) => setTowerName(e.target.value)}
          />
          <button 
          className="btn-next btn-next-customtower"
          onClick={handleInsert}
          >CODE</button>
        </div>

        <div className="container-of-main-container">
          <div className="main-container-customtower">
            <div className="main-border-create">
              <div className="main-top-customtower">
                <img
                  src="./images/search.png"
                  height={30}
                  alt="search"
                  className="search-icon"
                />
                <input
                  className="inputs search-customtower"
                  type="text"
                  value={searchWords}
                  onChange={wordSearchChange}
                  placeholder="Search Word"
                />
                <button
                  className="btn-next btn-next-customtower"
                  onClick={handleAddButtonClick}
                >
                  ADD
                </button>
              </div>

              <div className="word-container-scroll-customtower">
                {filteredWords.map((name, index) => (
                  <div
                    key={index}
                    className={`word-container-customtower 
                                ${index === clickedWord ? "clicked" : ""}`}
                    onClick={() => handleWordClick(index)}
                  >
                    <h4 className="words-customtower">{name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="divider-customtower"></div>

          <div className="main-container-wordsadded">
            <div className="main-border-create">
              <div className="main-top-wordsadded">
                <button
                  className="btn-back btn-remove-wordsadded"
                  onClick={() => {
                    if (clickedAddedWord !== null) {
                      removeWord(clickedAddedWord);
                    }
                  }}
                >
                  REMOVE
                </button>
              </div>

              <div className="word-container-scroll-wordsadded">
                {added.map((name, index) => (
                  <div
                    key={index}
                    className={`word-container-wordsadded 
                                ${index === clickedAddedWord ? "clicked" : ""}`}
                    onClick={() => handleAddedWordClick(index)}
                  >
                    <h4 className="words-wordsadded">{name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomTower;
