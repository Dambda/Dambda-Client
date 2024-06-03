import React from "react";
import Container from "../../styles/components/emotionkeyworditem";

const EmotionKeywordItem = ({top, left, emotion, count, isPositive, padding}) => {
    return (
        <Container padding={padding} condition={isPositive === true ? "P" : "N"} style={{left : `${left}px`, top : `${top}px`}}>
            <span className="emotion-span--emotion">{emotion}</span>
            <span className="emotion-span--count">{count}</span>
        </Container>
    );
}

export default EmotionKeywordItem