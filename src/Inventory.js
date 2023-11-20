import "./Inventory.css";
import "./root.css";
import "@fontsource/lilita-one";

function Inventory() {
  return <>
        <div className="main-inventory">
            <div className="main-inventory-top-container">
                <button className="btn-back btn-back-main-inventory">BACK</button>
                <h1 className="header-main-inventory">
                    Inventory
                </h1>
                <button className="btn-next btn-next-main-inventory">NEXT</button>
            </div>
            <div className="main-container">
                <div className="items-container-scroll-inventory">
                    <button className="item-button"> <img src='./images/small_bandage.png' alt='bandage-item' className="bandage"/> <span>0x</span></button>
                    <button className="item-button"> <img src='./images/health_kit.png' alt='kit-item' className="medkit"/> <span>0x</span></button>
                    <button className="item-button"> <img src='./images/unusual_battery.png' alt='battery-item' className="battery"/> <span>0x</span></button>
                    <button className="item-button"> item 4</button>
                    <button className="item-button"> item 5</button>
                    <button className="item-button"> item 6</button>
                    <button className="item-button"> item 4</button>
                    <button className="item-button"> item 5</button>
                    <button className="item-button"> item 6</button>
                    <button className="item-button"> item 4</button>
                    <button className="item-button"> item 5</button>
                    <button className="item-button"> item 6</button>
                    <button className="item-button"> item 4</button>
                    <button className="item-button"> item 5</button>
                    <button className="item-button"> item 6</button>
                    <button className="item-button"> item 6</button>
                </div>
            </div>
        </div>
  </>
}

export default Inventory;