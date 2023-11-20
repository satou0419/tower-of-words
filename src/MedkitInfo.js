import "./root.css";
import "@fontsource/lilita-one";
import "./MedkitInfo.css";

export default function MedkitInfo(){
    return(
        <>
        <div className="main-iteminfo">
        <div className="iteminfo">
            <button className="btn-back btn-back-iteminfo">BACK</button>
        <h1>ITEM INFO</h1>
        </div>
        <div className="iteminfo-main-container">
        <div>
        <div className="image-box">
        <img src="./images/medkit.png" className="bandage"></img>
        </div>
        <h3 className="medkit-name">
            Medkit
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
