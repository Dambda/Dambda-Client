import Happy from "@/assets/emotion-character/happiness.png";
import sad from "../../assets/emotion-character/sadness.png";
import Angry from "@/assets/emotion-character/anger.png";
import Anxiety from "@/assets/emotion-character/anxiety.png";
import Container from "../../styles/components/analysis";
import { useState, useEffect } from "react";
import { recommend } from "../../constants/analysis";
import Face from "@/assets/face-big.png";

const EmotionCharacters = [Happy, sad, Angry, Anxiety];
const EmotionText = ["기쁜", "슬픈", "화난", "불안"];

function findIndexOfMax(arr) {
    if (arr.length === 0) {
        return -1; 
    }
    let maxIndex = 0;
    let secondMaxIndex = -1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            secondMaxIndex = maxIndex;
            maxIndex = i;
        } else if (arr[i] !== arr[maxIndex]) {
            if (secondMaxIndex === -1 || arr[i] > arr[secondMaxIndex]) {
                secondMaxIndex = i;
            }
        }
    }

    return [maxIndex, secondMaxIndex];
}

const Analysis = ({data, diaryid}) => {
    const [emotionType, setEmotionType] = useState(0);
    const [recommendArr, setRecommendArr] = useState([]);
    const characterIndex = findIndexOfMax(Object.values(data[diaryid].diary.values))
    useEffect(() => {
        setRecommendArr(recommend.sort(() => Math.random() - 0.5).slice(0, 3));
    }, []);
    
    return (
        <Container>
            <div className="analysis-emotion">
                <div style={{width : "144px", height : "144px", display : "flex", justifyContent : "center", position : "relative"}}>
                {
                    emotionType === 0 ? <img src={EmotionCharacters[characterIndex[0]]}/> : <img src={EmotionCharacters[characterIndex[1]]}/>
                }
                <div className="chat">
                {
                    emotionType=== 0 ? "이 날은 "+EmotionText[characterIndex[0]]+" 감정이 조금" : "이 날은 "+EmotionText[characterIndex[1]]+" 감정이 조금"
                }
                <br>
                </br>
                컸나봐요
                </div>
                </div>
                <ul>
                    <li style={{backgroundColor : emotionType === 0 ? "#47588C" : ""}} onClick={() => setEmotionType(0)}></li>
                    <li style={{backgroundColor : emotionType === 1 ? "#47588C" : ""}} onClick={() => setEmotionType(1)}></li>
                </ul>
            </div>
            <div className="analysis-comment">
                <span className="analysis-feedback">
                    {
                        data[diaryid].diary.feedback
                    }
                </span>
                <ul className="analysis-words">
                    {
                        data[diaryid].diary.words.map((value, index) => {
                            return(
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="analysis-suggestion">
                <header>
                    <h1>
                        추천활동
                    </h1>     
                </header>
                <div>
                    {
                        recommendArr.map((Value, index) => {
                            return (
                                <div className="analysis-suggestion-box" key={index}>
                                    <header>
                                        <span>투두</span>
                                        <Value.icon/>
                                    </header>
                                    <div>
                                        {Value.text.split('\n')[0]}<br></br>
                                        {Value.text.split('\n')[1]}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    );
}

export default Analysis;