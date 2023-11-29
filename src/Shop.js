import "./Shop.css";
import "./root.css";
import "@fontsource/lilita-one";
import React, { useState } from 'react';

function Shop() {
    const items = ['1', '2', '3', '4', '5', '6'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(items.slice(0, 3));

    return <>
            <div className="main-shop">
                <div className="shop-top-container">
                    <button className="btn-back btn-back-shop">BACK</button>
                    <h1 className="header-shop">
                        SHOP
                    </h1>
                    <button className="btn-next btn-next-shop">NEXT</button>
                </div>
                <div className="main-container">
                    <div className="shop-container">
                        {items.map((item, index) => (
                        <div
                            key={index}
                            className = "item"
                        >
                            {item}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
    </>
}

export default Shop;