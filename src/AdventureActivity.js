import './TheGame.css';
import './root.css'

export default function AdActivity(){

    return<div className='mother-of-all'>
            <div className="mini-bar-container">
                <button className="exit-button">Exit</button>

                <div className="progress-bar">Progress: floor ###</div>
            </div>





            <div className="screen">
                <div className="activity-container">
                    <div className="activity-log"></div>
                    <div className="image-container"><img src='./images/enemy-spring-type.png'/></div>
                    <div className="blank"></div>
                </div>
            </div>







            {/* UI OF THE PAGE */}
            <div className="ui">
                {/* <img src="./frame.png"/> */}
                <div className="common-nga-class left">
                    <h2>Items</h2>

                    <div className="items-container">
                        <div className="container-upper">
                            <button className="item-button"> <img src='./images/small_bandage.png'/> <span>x0</span></button>
                            <button className="item-button"> <img src='./images/health_kit.png'/> <span>x0</span></button>
                            <button className="item-button"> <img src='./images/unusual_battery.png'/> <span>x0</span></button>
                        </div>
                        
                        <div className="container-lower">
                            <button className="item-button"> item 4</button>
                            <button className="item-button"> item 5</button>
                            <button className="item-button"> item 6</button>
                        </div>
                    </div>
                </div>

                <div className='common-nga-class center'>
                    <div className="audio-button-container"><button>audio</button></div>
                    <div className="input-container"><input></input></div>
                    <div className="spell-button-container"><button>GO!</button></div>
                    <div className="hp-container">*hp diri*</div>
                    
                </div>

                <div className='common-nga-class right'>    
                    <h2>Word Info</h2>
                    <div className="info-container">
                        <div>Pronounciation</div>
                        <div className="p-box"></div>
                        <div>Definition</div>
                        <div className="d-box"></div>
                    </div>    
                </div>
                
            </div>
        </div>
    
}