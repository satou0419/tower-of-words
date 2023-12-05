import { Link } from "react-router-dom";
import "./TheGame.css";
import "./root.css";
import { useEffect, useState, useContext, useRef } from "react";
import { Context } from "./App";
import axios from 'axios';


export default function AdActivity() {
  const [words] = useContext(Context)
  const audioRef = useRef(null);
  const [tower, setTower] = useState(null);
  const [towerWords, setTowerWords] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)
  const [progress, setProgress] = useState(0)
  const [hp, setHp] = useState(6)
  const [input, setInput] = useState("")

  const setTheWords = ()=>{
    console.log(tower.length)
    let wordsTemp = [{}];
    for(let i = 0 ; i < 10; i++){
      for(let k = 0; k < words.length; k++){
        if(tower.enemyList[i].wordId === words[k].wordID){
          wordsTemp[i] = (words[k]);
        }
      }
    }

    setTowerWords([...wordsTemp])
    
  }

  function audioPlay(){

    audioRef.current.play();

  }

  function checkSpell(){
    console.log("checkSpell clicked")
    console.log(input);
    if(input === towerWords[progress].word){
      setProgress(progress + 1);
      console.log("CORRECT");
      setInput("");
    }else{
      setHp(hp - 1);
    }

    console.log(hp)
  }

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:8080/tower/getTowerById?towerId=1');
    //     const result = await response.json();
    //     console.log(result);
    //     setTower(result);
    //     console.log(tower);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   } finally {
    //     console.log(tower);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    axios.get(`http://localhost:8080/tower/getTowerById?towerId=1`)
          .then(response => {
              console.log(response)
              setTower(response.data)
              setLoading(false);
              
              // return response.data;
          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
          });
    
  }, []);

  useEffect(() => {
    if(!loading){
      console.log(tower);
      setTheWords();
    }
  }, [tower]);

  useEffect(() => {
    if(!loading){
      console.log(towerWords);
      setLoading2(false);
    }
  }, [towerWords]);



  // useEffect(() => {
  //   if(!loading){
  //     setTheWords();
  //     console.log(towerWords);
  //   }
    
  // }, [tower]);

//   useEffect(() => {
//     fetch('http://localhost:8080/tower/getTowerById?towerId=1')
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`Network response was not ok. Status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }, []);



  return (
    <>

    {loading2 === true ? <div>Loading...</div> :
      
    <div className="mother-of-all">
      {towerWords[1].word}asdasd

      {tower.towerName}
      {tower.enemyList[4].enemyName}
      
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
            <img src={`./images/${tower.enemyList[progress].imagePath}`} />
          </div>
          <div className="blank"></div>
        </div>
      </div>

      {/* UI OF THE PAGE */}
      <div className="ui">
        {/* <img src="./images/frame.png"/> */}
        <div className="common-nga-class left">
          <h2>Items</h2>

          <div className="items-container">
            <div className="container-upper">
              <button className="ad-activity-item-button">
                {" "}
                <img src="./images/small_bandage.png" /> <span>x0</span>
              </button>
              <button className="ad-activity-item-button">
                {" "}
                <img src="./images/health_kit.png" /> <span>x0</span>
              </button>
              <button className="ad-activity-item-button">
                {" "}
                <img src="./images/unusual_battery.png" /> <span>x0</span>
              </button>
            </div>

            <div className="container-lower">
              <button className="ad-activity-item-button"> item 4</button>
              <button className="ad-activity-item-button"> item 5</button>
              <button className="ad-activity-item-button"> item 6</button>
            </div>
          </div>
        </div>

        <div className="common-nga-class center">
          <div className="audio-button-container">
            <audio ref={audioRef} src={`./audios/${towerWords[progress].audioPath}`}/>
            <button onClick={() => {audioPlay()}}>audio</button>
          </div>
          <div className="input-container">
            <input type="text" value={input} onChange={handleInput}></input>
          </div>
          <div className="spell-button-container">
            <button onClick={() => {checkSpell()}}>GO!</button>
          </div>
          <div className="hp-container">
                        <img src={hp >= 1 ? `./images/red_heart.png` : `./images/white_heart.png`}/>
                        <img src={hp >= 2 ? `./images/red_heart.png` : `./images/white_heart.png`}/>
                        <img src={hp >= 3 ? `./images/red_heart.png` : `./images/white_heart.png`}/>
                        <img src={hp >= 4 ? `./images/red_heart.png` : `./images/white_heart.png`}/>
                        <img src={hp >= 5 ? `./images/red_heart.png` : `./images/white_heart.png`}/>
                        <img src={hp >= 6 ? `./images/red_heart.png` : `./images/white_heart.png`}/>
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
    </>
  );
}
