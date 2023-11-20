import "./Shop.css";
import "./root.css";
import "@fontsource/lilita-one";
import React, { useState } from "react";

function Shop() {
  const itemsData = ["1", "2", "3"];
  const totalItems = itemsData.length;
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };
  return (
    <>
      <div className="main-shop">
        <div className="shop-top-container">
          <button className="btn-back btn-back-shop">BACK</button>
          <h1 className="header-shop">SHOP </h1>
          <button className="btn-next btn-next-shop">NEXT</button>
        </div>
        <div className="main-container">
          <div id="prev" onClick={handlePrevClick}>
            &lt;
          </div>
          <div className="carousel">
            {itemsData.map((item, index) => (
              <div
                key={index}
                className={`item ${index === currentIndex ? "active" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
          <div id="next" onClick={handleNextClick}>
            &gt;
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
