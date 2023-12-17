import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ViewCustomWords.css";
import "./root.css";
import "@fontsource/lilita-one";

function ViewCustomWords() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedWordsIds = location.state?.selectedWords || [];
  const [selectedWords, setSelectedWords] = useState([]);
  console.log(selectedWords);

  useEffect(() => {
    fetch("http://localhost:8080/word/getAllWord")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const filteredWords = data.filter((word) =>
          selectedWordsIds.includes(word.wordID)
        );

        setSelectedWords(filteredWords);
        console.log(filteredWords);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="main-viewcustomwords">
        <div className="viewcustomwords-top-container">
          <button
            className="btn-back btn-back-viewcustomwords"
            onClick={goBack}
          >
            BACK
          </button>
        </div>
        <div className="main-container-viewcustomwords">
          <div className="main-border-view">
            <div className="word-container-scroll-viewcustomwords">
              {selectedWords.map((name, index) => (
                <div key={index} className="word-container-viewcustomwords">
                  <h4 className="words-viewcustomwords">{name.word}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCustomWords;
