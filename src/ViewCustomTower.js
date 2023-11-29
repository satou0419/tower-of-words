import "./ViewCustomTower.css";
import "./root.css";
import "@fontsource/lilita-one";
import React, { useState } from "react";

function ViewCustomTower() {
    const customTower = ["apple", "banana", "orange", "grape", "watermelon", "carrot", "broccoli", "potato", "tomato", "cucumber", "table", "chair", "lamp", "book", "clock"];

    const participants = ["testblock", "testblock", "testblock", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test"];

    const [clickedTower, setClickedTower] = useState(null);
    const [searchCustomTower, setSearchCustomTower] = useState('');
    const [searchParticipant, setSearchParticipant] = useState('');
    const [filteredCustomTower, setFilteredCustomTower] = useState(customTower);
    const [filteredParticipants, setFilteredParticipants] = useState(participants);
    const [isRightContainerVisible, setIsRightContainerVisible] = useState(false);

    const towerClicked = (index) => {
        const newClickedTower = index === clickedTower ? null : index;

        setClickedTower(newClickedTower);
        setIsRightContainerVisible(newClickedTower !== null);
    };    

    const customTowerSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchCustomTower(searchTerm);
        setClickedTower(null);
        const filtered = customTower.filter(word => word.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredCustomTower(filtered);
    };
    
    const participantsSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchParticipant(searchTerm);
        const filtered = participants.filter(word => word.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredParticipants(filtered);
    };

    return <>
            <div className="main-viewcustomtower">
                <div className="viewcustomtower-top-container">
                    <button className="btn-back btn-back-viewcustomtower">BACK</button>

                    <button className="btn-next btn-next-viewcustomtower">GAME</button>
                </div>
                <div className="main-container-overall">
                    <div className="main-container-left">
                        <div className="main-border-view">
                            <div className="main-top-viewcustomtower">
                                <img src="./images/search.png" height={30} alt="search"  className="search-icon"/>
                                <input 
                                    className="inputs search-viewcustomtower"
                                    type="text"
                                    value={searchCustomTower}
                                    onChange={customTowerSearchChange}
                                    placeholder="Search Tower Name"
                                /> 
                            </div>

                            <div className="word-container-scroll-viewcustomtower">
                                {filteredCustomTower.map((name, index) => (
                                    <div key={index} className={`word-container-viewcustomtower ${index === clickedTower ? 'clicked' : ''}`} onClick={() => towerClicked(index)}>
                                        <h4 className="words-viewcustomtower">
                                            {name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="divider">

                    </div>

                    <div className="main-container-right">
                        <div className="main-border-view">
                            {isRightContainerVisible ? (
                                <div className="main-container-right-inner">
                                    <div className="main-top-viewparticipants">
                                        <img src="./images/search.png" height={30} alt="search"  className="search-icon"/>
                                        <input 
                                            className="inputs search-viewparticipants" 
                                            type="text"
                                            value={searchParticipant}
                                            onChange={participantsSearchChange}
                                            placeholder="Search Participant"
                                        /> 
                                        <button className="btn-next btn-next-viewparticipants">FILTER</button>
                                    </div>

                                    <div className="word-container-scroll-viewparticipants">
                                        {filteredParticipants.map((firstname, index) => (
                                            <div key={index} className="word-container-viewcustomtower">
                                                <h4 className="words-viewcustomtower">
                                                    {firstname}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="code-viewparticipants">
                                        CODE: TEST
                                    </div>
                                </div>
                            ) : (
                                <div className="main-container-right-blank">

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    </>
}

export default ViewCustomTower;