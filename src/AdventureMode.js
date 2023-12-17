import { Link, useNavigate} from "react-router-dom";
import "./AdventureMode.css";
import { useState, useContext, useEffect  } from "react";
import { Context } from "./App";

export default function AdventureMode() {
  const [words, userInfo] = useContext(Context)
  const [towerids, setTowerIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const navigate = useNavigate();


  async function checkProgress(towId){
    if((userInfo.progress + 1) >= towId){
      navigate(`/adventure/${towId}`);
    }else{
      console.log("complete pre-requisite towers first");
    }
    // navigate("/adventure");
  };
  return (
    <>
      <Link to="/home">
        <button className="btn-back">Back</button>
      </Link>

      <section className="adventure-container">
        <div className="container-tower-details">
          {/* <Link to="/adventure/1" className="tower-details">
            <span>Tower 1</span>
            <img src="./images/tower.png" className="img-tower" />
          </Link>

          <Link to="/adventure/2" className="tower-details">
          <div className="tower-details">
            <span>Tower 2</span>
            <img src="./images/tower.png" className="img-tower" />
          </div>
          </Link>

          <div className="tower-details">
            <span>Tower 3</span>
            <img src="./images/tower.png" className="img-tower" />
          </div> */}
          <ul style={{listStyle: 'none'}}>
                    {towerids.map((id, index) => (
                        <li key={index}>
                            {/* <Link to={`/adventure/${id}`} className="tower-details"> */}
                            <div className="tower-details" onClick={()=>{checkProgress(id)}}>
                            <span>Tower {id}</span>
                            <img src="./images/tower.png" className="img-tower" />
                            {/* </Link> */}
                            </div>
                        </li>
                    ))}
                    
                </ul>

        </div>

        <div className="tower-progress">
          <h1>
            <span className="completed">{userInfo.progress} </span> OUT OF{" "}
            <span className="total">10</span> TOWERS COMPLETED
          </h1>
        </div>
      </section>
    </>
  );
}
