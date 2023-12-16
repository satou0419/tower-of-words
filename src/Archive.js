import { useState, useEffect, useContext } from "react";
import "./Archive2.css";
import { Context } from "./App"; // Import your context

export default function Archive() {
  const [selected, setSelected] = useState({});
  const [searchText, setSearchText] = useState("");
  const [selectedAudioPath, setSelectedAudioPath] = useState("");
  const [, userInfo, handleLogin] = useContext(Context); // Access the words and userInfo from Context
  const userId = userInfo.user.userID; // Use userID from userInfo

  const filteredWords =
    userInfo.user.userArchive?.words.filter((word) =>
      word.word.toLowerCase().includes(searchText.toLowerCase())
    ) || [];

  useEffect(() => {
    // Assume that the structure of userInfo is the same as the user object in your API response
    if (userInfo.user.userArchive) {
      // You don't need to setWords here as words is coming from Context
    }
  }, [userInfo]);

  function toSelect(word) {
    setSelectedAudioPath(word.audioPath);
    setSelected(word);
    console.log(selected);
  }

  function playAudio() {
    const audioPlayer = new Audio(`./audios/${selectedAudioPath}`);
    audioPlayer.play();
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
                    placeholder=""
                  />
                </div>
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
                    <button onClick={playAudio}>
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
