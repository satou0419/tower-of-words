import { useState } from "react";
import "./Archive2.css";

export default function Archive() {
  // var selected;
  const [selected, setSelected] = useState({});
  const [words, setWords] = useState([
    {
      id: 0,
      theword: "Happy",
      audiPath: "blabla.mp4",
      prounounciation: "ha-pi",
      definition: "skibidi bap bap yes yes",
      pOs: "verb",
    },
    {
      id: 1,
      theword: "Sad",
      audiPath: "blabla.mp4",
      prounounciation: "bobo ka?",
      definition: "hu hu hu huhuhu",
      pOs: "verb",
    },
    {
      id: 2,
      theword: "Anger",
      audiPath: "blabla.mp4",
      prounounciation: "ang-gir",
      definition: "reeeeeeeeeeeeeeeeeeeee!",
      pOs: "verb",
    },
    {
      id: 3,
      theword: "Death",
      audiPath: "blabla.mp4",
      prounounciation: "det",
      definition: "void void void void void",
      pOs: "verb",
    },
  ]);

  function toSelect(word) {
    // selected = id;
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
                  <img src="./images/magnifying_glass_icon.png" />
                  <input></input>
                </div>

                <button>SEARCH</button>
              </div>

              <div className="word-list">
                <ul style={{ listStyle: "none" }}>
                  {words.map((word, index) => (
                    <li key={index}>
                      <div
                        className={
                          word.id !== selected.id
                            ? "the-default"
                            : "the-selected"
                        }
                        onClick={() => {
                          toSelect(word);
                        }}
                      >
                        {word.theword}
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
                  <div className="word-selected">{selected.theword}</div>
                  <div className="pronounciation">
                    {selected.prounounciation}
                    <button>
                      <img src="./images/audio_orange.png" />
                    </button>
                  </div>

                  <div className="description-box">
                    <div className="pos-box">{selected.pOs}</div>
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
