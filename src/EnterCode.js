import { Link, useNavigate  } from "react-router-dom";
import "./EnterCode.css";
import "./root.css";
import "@fontsource/lilita-one";
import { useState, useEffect } from "react";

function EnterCode() {
  const [gameCode, setGameCode] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:8080/CustomTower/getAllCustomTower')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      setData(data);
      console.log(data)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  },[]);
  
  const handleCodeChange = (event) => {
    setGameCode(event.target.value);
  };

  const handleJoinNow = () => {
    if (gameCode.trim() === '') {
      console.error('Game code cannot be empty');
      return;
    }

    console.log("Game Code:", gameCode);
    navigate(`/custom-game/${gameCode}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="main-entercode">
        <div className="main-container-entercode">
          <div className="left-container-entercode"> 
            <h1 className="title-entercode">Join Custom Tower</h1>
            <input
              className="inputs enter-code"
              type="text"
              placeholder="Enter Code"
              value={gameCode}
              onChange={handleCodeChange}
            />
            <button className="join-code" onClick={handleJoinNow}>
              JOIN NOW
            </button>
            <button className="cancel-entercode" onClick={goBack}>
              CANCEL
            </button>
          </div>
          <div className="right-container-entercode">
            <img src="./images/custom-banner.png" className="custom-img-1" />
            <img src="./images/custom-banner.png" className="custom-img-2" />
            <img src="./images/custom-banner.png" className="custom-img-3" />
            <img src="./images/custom-banner.png" className="custom-img-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterCode;
