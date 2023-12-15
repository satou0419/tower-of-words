import { Link, useNavigate } from "react-router-dom";
import "./ViewCustomTower.css";
import "./root.css";
import "@fontsource/lilita-one";
import React, { useEffect, useState } from "react";

function ViewCustomTower(userIDRef) {
    console.log(userIDRef);
    const [data, setData] = useState([]);

    const [clickedTower, setClickedTower] = useState(null);
    const [searchCustomTower, setSearchCustomTower] = useState('');
    const [searchParticipant, setSearchParticipant] = useState('');
    const [customTower, setCustomTower] = useState([]);
    const [participant, setParticipant] = useState([]);
    const [filteredCustomTower, setFilteredCustomTower] = useState([]);
    const [filteredParticipants, setFilteredParticipants] = useState([]);
    const [isRightContainerVisible, setIsRightContainerVisible] = useState(false);
    const [selectedWords, setSelectedWords] = useState([]);
    const navigate = useNavigate();

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
            const userTowers = data.filter(tower => tower.creator === userIDRef.userIDRef && tower.isDeleted === 0);
            const towerNames = userTowers.map(tower => tower);
            setCustomTower(towerNames);
            setFilteredCustomTower(towerNames);
            console.log(towerNames);
            
            const user = data.map(tower => tower.participantslist.map(participant => participant.username));
            setParticipant(user);
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
        console.log(newClickedTower)
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
        const filtered = customTower.filter(towerName => towerName.towername.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredCustomTower(filtered);
    };
    
    const participantsSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchParticipant(searchTerm);

        if (searchTerm === '') {
            setFilteredParticipants([]);
        } else {
            const filtered = customTower
                .filter(tower => tower.participantslist.length > 0)
                .map(tower => tower.participantslist.map(participant => participant.username))
                .flat()
                .filter(username => username.toLowerCase().includes(searchTerm));
    
            setFilteredParticipants(filtered);
        }
    };

    const handleDeleteTower = (towerIndex) => {
        const updatedData = [...data];

        console.log(towerIndex)

        fetch(`http://localhost:8080/CustomTower/deleteCustomTower/${updatedData[towerIndex].ctid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            setClickedTower(null);
            setIsRightContainerVisible(false);

            setData(updatedData);

            const userTowers = updatedData.filter(tower => tower.creator === userIDRef && tower.isDeleted === 0);
            setCustomTower(userTowers);
            setFilteredCustomTower(userTowers);
        })
        .catch(error => {
            console.error('There was a problem with the update operation:', error);
        });
    };

    const handleWordsButtonClick = () => {
        if (clickedTower === null) {
            alert('Please select a custom tower.');
        } else {
            const words = data[clickedTower].enemylist.map(word => word.wid);
            setSelectedWords(words);
            console.log(words);
            navigate('/view-words-added', { state: { selectedWords: words } });
        }
    };

    const goBack = () => {
        navigate(-1);
    };

    return <>
            <div className="main-viewcustomtower">
                <div className="viewcustomtower-top-container">
                    <button className="btn-back btn-back-viewcustomtower" onClick={goBack}>BACK</button>

                    <button className="btn-next btn-next-viewcustomtower" onClick={handleWordsButtonClick} >WORDS</button>
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
                                            {name.towername}
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
                                        <button className="btn-back" onClick={() => handleDeleteTower(clickedTower)}>
                                            DELETE
                                        </button>
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
