import { Link, useNavigate } from "react-router-dom";
import "./EnterCode.css";
import "./root.css";
import "@fontsource/lilita-one";
import { useState, useEffect, useContext } from "react";
import { Context } from "./App";
import DialogBox from './DialogBox';

function EnterCode() {
  const [customTower, setCustomTower] = useState(null);
  const [gameCode, setGameCode] = useState("");
  const navigate = useNavigate();
  const [word, userInfo, handleLogin] = useContext(Context);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogProps, setDialogProps] = useState({});

  const handleCodeChange = (event) => {
    setGameCode(event.target.value);
  };

  const handleJoinNow = () => {
    if (gameCode.trim() === "") {
      console.error("Game code cannot be empty");
      return;
    }

    

    console.log("Game Code:", gameCode);

    fetch(`http://localhost:8080/CustomTower/getByGameCode/${gameCode}`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      setCustomTower(data);
      console.log(customTower);

      if (data.creator === userInfo.userIDRef) {
        showDialog("Error", "Cannot enter your own game.");
        return;
      }

      return fetch(`http://localhost:8080/CustomTower/${data.ctid}/User/${userInfo.userIDRef}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Participant added successfully:", data);
        navigate(`/custom-game/${gameCode}`);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const showDialog = (title, message) => {
    const buttons = [
      { label: "OK", className: "btn-next", onClick: onClose }
    ];
  
    const dialogProps = {
      title: title,
      message: message,
      buttons: buttons,
      imageSrc: "./images/sad robot.png"
    };
 
    setDialogProps(dialogProps);
    setIsDialogOpen(true);
  };
 
  

  const onClose = () => {
    setIsDialogOpen(false);
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
      {isDialogOpen && <DialogBox {...dialogProps} onClose={onClose} />}
    </>
  );
}

export default EnterCode;
