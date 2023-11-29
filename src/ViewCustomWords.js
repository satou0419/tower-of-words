import "./ViewCustomWords.css";
import "./root.css";
import "@fontsource/lilita-one";

function ViewCustomWords() {
    const words = ["apple", "banana", "orange", "grape", "watermelon", "carrot", "broccoli", "potato", "tomato", "cucumber", "table", "chair", "lamp", "book", "clock"];

    return <>
        <div className="main-viewcustomwords">
            <div className="viewcustomwords-top-container">
                <button className="btn-back btn-back-viewcustomwords">BACK</button>
            </div>
            <div className="main-container-viewcustomwords">
                <div className="main-border-view">
                    <div className="word-container-scroll-viewcustomwords">
                        {words.map((name, index) => (
                            <div key={index} className={`word-container-viewcustomwords 
                            }`} 
                            >
                                <h4 className="words-viewcustomwords">
                                    {name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ViewCustomWords;