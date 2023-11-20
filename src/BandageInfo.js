import "./root.css";
import "@fontsource/lilita-one";
import "./BandageInfo.css";

export default function BandageInfo(){
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
        <img src="./images/bandage.png" className="bandage-pic" alt='bandage-item' />
        </div>
        <h3 className="bandage-name">
            Bandage
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
