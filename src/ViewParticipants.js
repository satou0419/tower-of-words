import "./ViewParticipants.css";
import "./root.css";
import "@fontsource/lilita-one";

function ViewParticipants() {
  return <>
        <div className="main-viewparticipants">
            <div className="viewparticipants-top-container">
                <button className="btn-back btn-back-viewparticipants">BACK</button>
                <h1 className="header-viewparticipants">
                    View Participants
                </h1>
                <button className="btn-next btn-next-viewparticipants">WORD</button>
            </div>
            <div className="main-container">
                <div className="main-top-viewparticipants">
                    <img src="./images/search.png" height={30} alt="search"  className="search-icon"/>
                    <input className="inputs search-viewparticipants" type="text" /> 
                    <button className="btn-next btn-next-viewparticipants">FILTER</button>
                </div>

                <div className="word-container-scroll-viewparticipants">
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                    <div className="word-container-viewparticipants"> 
                        <h4 className="words-viewparticipants">
                            test
                        </h4>
                    </div>
                </div>

                <div className="code-viewparticipants">
                    CODE: TEST
                </div>
            </div>
        </div>
  </>
}

export default ViewParticipants;