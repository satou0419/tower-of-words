import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./GenerateCode.css";
import "./root.css";
import "@fontsource/lilita-one";

function GenerateCode() {
  const { gamecode } = useParams();
  const [existingGameCode, setExistingGameCode] = useState([]);
  const navigate = useNavigate();

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

  const isExistingCode = existingGameCode.some(code => code === gamecode);

  

  useEffect(() => {
    if (existingGameCode.length > 0 && !existingGameCode.includes(gamecode)) {
      navigate("/home");
    }
  }, [existingGameCode, gamecode, navigate]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="main-generatecode">
        <div className="generatecode-top-container">
          <button className="btn-back btn-back-generatecode" onClick={goBack}>
            BACK
          </button>
          <button className="btn-next btn-next-generatecode">FINISH</button>
        </div>

        <div className="main-container-code">
          <div className="code-container">
            <h1 className="generate-container-title">CODE</h1>
            <div className="generated-code">{gamecode}</div>
          </div>
        </div>

      </div>
    </>
  );
}

export default GenerateCode;
