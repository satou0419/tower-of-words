import { useState, useEffect } from "react";
import "./Archive2.css";

export default function Archive() {
  const [selected, setSelected] = useState({});
  const [words, setWords] = useState([]);
  const [searchText, setSearchText] = useState("");
  const userId = localStorage.getItem("userID");

  useEffect(() => {
    // Fetch user's archive data based on the logged-in user ID
    const fetchUserArchive = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/watataps/users/getUserById/${userId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();

        // Assuming userData has the structure you provided
        if (userData) {
          setWords(userData.user.userArchive.words);
        } else {
          console.log("No user data in the response");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserArchive();
  }, [userId]);

  const filteredWords = words.filter((word) =>
    word.word.toLowerCase().includes(searchText.toLowerCase())
  );

  function toSelect(word) {
    setSelected(word);
    console.log(selected);
  }

  return (
    <div>
      <div className="archive-container">
        <div className="left-side">
          <div className="inner-left">
            <div className="super-inner-left">
              <div className="search-container">
                <div className="input-image-cont">
                  <img
                    src="./images/magnifying_glass_icon.png"
                    alt="magnifying-glass"
                  />
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search words..."
                  />
                </div>

                <button>SEARCH</button>
              </div>

              <div className="word-list">
                <ul style={{ listStyle: "none" }}>
                  {filteredWords.map((word) => (
                    <li key={word.wordID}>
                      <div
                        className={
                          word.wordID !== selected.wordID
                            ? "the-default"
                            : "the-selected"
                        }
                        onClick={() => {
                          toSelect(word);
                        }}
                      >
                        {word.word}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hinge"></div>
        <div className="right-side">
          <div className="inner-right">
            <div className="super-inner-right">
              {Object.keys(selected).length > 0 ? (
                <div className="word-info-container">
                  <div className="word-selected">{selected.word}</div>
                  <div className="pronounciation">
                    {selected.pronunciation}
                    <button>
                      <img src="./images/audio_orange.png" alt="audio" />
                    </button>
                  </div>

                  <div className="description-box">
                    <div className="pos-box">{selected.partOfSpeech}</div>
                    <div className="definition-box">{selected.definition}</div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
