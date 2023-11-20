import "./Shop.css";
import "./root.css";
import "@fontsource/lilita-one";
import React, { useState } from 'react';

function Shop() {
    const items = ['1', '2', '3'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(items.slice(0, 3));

    const handlePrevClick = () => {
        if (currentIndex === 0) {
        setCurrentIndex(items.length - 1);
        } else {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        }

        updateVisibleItems();
    };

    const handleNextClick = () => {
        if (currentIndex === items.length - 1) {
        setCurrentIndex(0);
        } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }

        updateVisibleItems();
    };

    const updateVisibleItems = () => {
        const start = currentIndex % items.length;
        const end = start + 3;
        const newVisibleItems = items.slice(start, end);
        setVisibleItems(newVisibleItems);
    };
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
                <div id="prev" onClick={handlePrevClick}>&lt;</div>
                <div className="carousel">
                    {items.map((item, index) => (
                    <div
                        key={index}
                        className={`item ${index === currentIndex ? 'active' : ''}`}
                    >
                        {item}
                    </div>
                    ))}
                </div>
                <div id="next" onClick={handleNextClick}>&gt;</div>
                </div>
            </div>
    </>
}

export default Shop;