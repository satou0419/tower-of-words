import "./root.css";
import "@fontsource/lilita-one";
import "./BattInfo.css";

export default function BattInfo(){
    return(
        <>
        <div className="main-iteminfo">
        <div className="iteminfo">
            <button className="btn-back btn-back-iteminfo">BACK</button>
        <h1 className="header-item">ITEM INFO</h1>
        </div>
        <div className="iteminfo-main-container">
        <div>
        <div className="image-box">
        <img src="./images/unusual battery.png" className="battery-pic" alt='battery-item' />
        </div>
        <h3 className="batt-name">
            Unusual Battery
        </h3>
        </div>
            <div className="img-info">
            <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. </p>
             </div>
        </div>
        </div>
        </>
    )
}
