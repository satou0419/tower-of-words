import { Link, useParams } from "react-router-dom";
import "./CustomTowerGame.css";
import "./root.css";
import { useEffect, useState, useContext, useRef } from "react";
import { Context } from "./App";
import {TowerCompletePop, TowerFailedPop} from "./ActivityPops";

export default function CustomTowerGame() {
  const [words, userInfo, setUserInfo] = useContext(Context)

  const audioRef = useRef(null);
  const [towerWords, setTowerWords] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)
  const [progress, setProgress] = useState(0)
  const [points, setPoints] = useState(0)
  const [isTowerCleared, setIsTowerCleared] = useState(false)
  const [isHpGone, setIsHpGone] = useState(false)
  const [hp, setHp] = useState(6)
  const [input, setInput] = useState("")
  const { gamecode } = useParams();
  const [customTower, setCustomTower] = useState([]);

  const setTheWords = ()=>{
    console.log(customTower.enemylist);
    let wordsTemp = [{}];
    for(let i = 0 ; i < 10; i++){
      for(let k = 0; k < words.length; k++){
        if(customTower.enemylist[i].wid === words[k].wordID){
          wordsTemp[i] = (words[k]);
        }
      }
    }

    setTowerWords([...wordsTemp])
    console.log(towerWords)
  }

  function audioPlay(){

    audioRef.current.play();

  }

  function checkSpell(){
    console.log("checkSpell clicked")
    console.log(input);
    if(input === towerWords[progress].word){
      if(progress < 9){
        setProgress(progress + 1);
      }
      setPoints(points + 1);
      console.log("CORRECT");
      setInput("");
    }else{
      setHp(hp - 1);
    }

    console.log(hp)
  }

  useEffect(() => {
    fetch(`http://localhost:8080/CustomTower/getByGameCode/${gamecode}`)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      setLoading(false);
      setCustomTower(data);
      console.log(customTower);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  },[]);

  useEffect(() => {
    if(!loading){
      if(points >= 10){
        setIsTowerCleared(true)
      }
    }
  }, [points]);

  useEffect(() => {
    if(!loading){
      console.log(customTower);
      setTheWords();
    }
  }, [customTower]);

  useEffect(() => {
    if(!loading){
      console.log(towerWords);
      setLoading2(false);
    }
  }, [towerWords]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if(!loading){
      if(hp <= 0){
        setIsHpGone(true)
      }
    }
  }, [hp]);

  return (
    <>

    {loading2 === true ? <div>Loading...</div> :
      
    <div className="mother-of-all">
      {/* {towid}asdasd

      {tower.towerName}
      {tower.enemyList[4].enemyName} */}
      
      <div className="mini-bar-container">
        <button className="exit-button">
          <Link to="/adventure">Exit</Link>
        </button>

        <div className="progress-bar">Progress: floor {progress + 1} / 10</div>
      </div>

      <div className="screen">
        <div className="activity-container">
          <div className="activity-log"></div>
          <div className="image-container">
            <img src={`/images/${customTower.enemylist[progress].imagePath}`} />
          </div>
          <div className="blank"></div>
        </div>
      </div>

      {/* UI OF THE PAGE */}
      <div className="ui">
        {/* <img src="./images/frame.png"/> */}
        <div className="common-nga-class left">
          <h2>Items Disabled</h2>
          <div className="items-container">
            <div className="container-lock">
                <img src="/images/ItemsDisabled.png" />
            </div>
          </div>
        </div>

        <div className="common-nga-class center">
          <div className="audio-button-container">
            <audio ref={audioRef} src={`/audios/${towerWords[progress].audioPath}`}/>
            <button onClick={() => {audioPlay()}}>audio</button>
          </div>
          <div className="input-container">
            <input type="text" value={input} onChange={handleInput}></input>
          </div>
          <div className="spell-button-container">
            <button onClick={() => {checkSpell()}}>GO!</button>
          </div>
          <div className="hp-container">
                        <img src={hp >= 1 ? `/images/red_heart.png` : `/images/white_heart.png`}/>
                        <img src={hp >= 2 ? `/images/red_heart.png` : `/images/white_heart.png`}/>
                        <img src={hp >= 3 ? `/images/red_heart.png` : `/images/white_heart.png`}/>
                        <img src={hp >= 4 ? `/images/red_heart.png` : `/images/white_heart.png`}/>
                        <img src={hp >= 5 ? `/images/red_heart.png` : `/images/white_heart.png`}/>
                        <img src={hp >= 6 ? `/images/red_heart.png` : `/images/white_heart.png`}/>
          </div>
        </div>

        <div className="common-nga-class right">
          <h2>Word Info</h2>
          <div className="info-container">
            <div>Pronounciation</div>
            <div className="p-box">{towerWords[progress].pronunciation}</div>
            <div>Definition</div>
            <div className="d-box">{towerWords[progress].definition}</div>
          </div>
        </div>
      </div>
    </div>

      
    }
    {isTowerCleared && <TowerCompletePop />}
    {isHpGone && <TowerFailedPop />}
    </>
  );
}
