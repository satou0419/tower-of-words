import "./CustomTower.css";
import "./root.css";
import "@fontsource/lilita-one";
import React, { useState } from "react";

function CustomTower() {
    const words = ["apple", "banana", "orange", "grape", "watermelon", "carrot", "broccoli", "potato", "tomato", "cucumber", "table", "chair", "lamp", "book", "clock"];

    const [added, setAdded] = useState([]);

    const [clickedWord, setClickedWord] = useState(null);
    const [clickedAddedWord, setClickedAddedWord] = useState(null);
    const [searchWords, setSearchWords] = useState('');
    const [filteredWords, setFilteredWords] = useState(words);

    const handleWordClick = (index) => {
        const newClickedWord = index === clickedWord ? null : index;

        setClickedWord(newClickedWord);
    };

    const handleAddedWordClick = (index) => {
        const newClickedAddedWord = index === clickedAddedWord ? null : index;
        
        setClickedAddedWord(newClickedAddedWord);
    }

    const wordSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchWords(searchTerm);
        setClickedWord(null);
        const filtered = words.filter(word => word.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredWords(filtered);
    };

    const addWord = (newWord) => {
        if (!added.includes(newWord)) {
            const isConfirmed = window.confirm(`Are you sure you want to add "${newWord}"?`);
    
            if (isConfirmed) {
                const newArray = [...added, newWord];
                setAdded(newArray);
            } else {
                console.log(`Adding "${newWord}" was canceled by the user.`);
            }
        } else {
            console.log(`"${newWord}" is already added.`);
        }
    };

    const removeWord = (index) => {
        const wordToRemove = added[index];
        const isConfirmed = window.confirm(`Are you sure you want to remove "${wordToRemove}"?`);
        if (isConfirmed) {
            const newArray = [...added];
            newArray.splice(index, 1);
            setAdded(newArray);
        } else {
            console.log(`Removing "${wordToRemove}" was canceled by the user.`);
        }
    };
    
    return <>
        <div className="main-customtower">
            <div className="customtower-top-container">
                <button className="btn-back btn-back-customtower">BACK</button>
                <input 
                    className="inputs inputs-towername" 
                    type="text"
                    placeholder="Input Tower Name"
                />
                <button className="btn-next btn-next-customtower">CODE</button>
            </div>

            <div className="container-of-main-container">   
                <div className="main-container-customtower">
                    <div className="main-border-create">
                        <div className="main-top-customtower">
                            <img src="./images/search.png" height={30} alt="search"  className="search-icon"/>
                            <input 
                                className="inputs search-customtower" 
                                type="text" 
                                value={searchWords}
                                onChange={wordSearchChange}
                                placeholder="Search Word"
                            /> 
                            <button 
                                className="btn-next btn-next-customtower"
                                onClick={() => {
                                    if (clickedWord !== null) {
                                        addWord(filteredWords[clickedWord]);
                                    }
                                }}
                            >ADD</button>
                        </div>

                        <div className="word-container-scroll-customtower">
                            {filteredWords.map((name, index) => (
                                <div key={index} className={`word-container-customtower 
                                ${index === clickedWord ? 'clicked' : ''}`} 
                                onClick={() => handleWordClick(index)}>
                                    <h4 className="words-customtower">
                                        {name}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="divider-customtower">

                </div>

                <div className="main-container-wordsadded">
                    <div className="main-border-create">
                        <div className="main-top-wordsadded">
                            <button 
                                className="btn-back btn-remove-wordsadded"
                                onClick={() => {
                                    if (clickedAddedWord !== null) {
                                        removeWord(clickedAddedWord);
                                    }
                                }}
                            >REMOVE</button>
                        </div>

                        <div className="word-container-scroll-wordsadded">
                            {added.map((name, index) => (
                                <div key={index} className={`word-container-wordsadded 
                                ${index === clickedAddedWord ? 'clicked' : ''}`} 
                                onClick={() => handleAddedWordClick(index)}>
                                    <h4 className="words-wordsadded">
                                        {name}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CustomTower;
