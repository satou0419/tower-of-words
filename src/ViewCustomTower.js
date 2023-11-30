import { Link } from "react-router-dom";
import "./ViewCustomTower.css";
import "./root.css";
import "@fontsource/lilita-one";
import React, { useEffect, useState } from "react";

function ViewCustomTower() {
    const [data, setData] = useState([]);

    const [clickedTower, setClickedTower] = useState(null);
    const [searchCustomTower, setSearchCustomTower] = useState('');
    const [searchParticipant, setSearchParticipant] = useState('');
    const [filteredCustomTower, setFilteredCustomTower] = useState([]);
    const [filteredParticipants, setFilteredParticipants] = useState([]);
    const [isRightContainerVisible, setIsRightContainerVisible] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/CustomTower/getAllCustomTower')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setData(data);

            console.log(data);
            const towerNames = data.map(tower => tower.towername);
            setFilteredCustomTower(towerNames);

            const user = data.map(tower => tower.participantslist.map(participant => participant.username));
            setFilteredParticipants(user);
            console.log(user);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    },[]);

    const towerClicked = (index) => {
        const newClickedTower = index === clickedTower ? null : index;

        setClickedTower(newClickedTower);
        setIsRightContainerVisible(newClickedTower !== null);

        if (newClickedTower !== null) {
            const participants = data[newClickedTower].participantslist.map(participant => participant.username);
            setFilteredParticipants(participants);
        }
    };    

    const customTowerSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchCustomTower(searchTerm);
        setClickedTower(null);
        const filtered = data.filter(tower => tower.towername.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredCustomTower(filtered.map(tower => tower.towername));
    };
    
    const participantsSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchParticipant(searchTerm);
        const filtered = data.filter(tower => tower.participantslist.map(participant => participant.username)).filter(username => username.toLowerCase().includes(searchTerm.toLowerCase()));
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
                                        {filteredParticipants.map((username, index) => (
                                            <div key={index} className="word-container-viewcustomtower">
                                                <h4 className="words-viewcustomtower">
                                                    {username}
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
