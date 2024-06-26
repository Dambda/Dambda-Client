import React, { useState } from "react";
import Container from "../../styles/components/emotionkeyword";
import InfoSVG from "@/assets/icon/info.svg?react";
import EmotionKeywordItem from "./EmotionKeywordItem";

const EmotionKeyword = () => {
    const [showInfo, SetShowInfo] = useState(false);

    return (
        <Container>
            <h1>자주 사용한 감정 키워드</h1>
            <div className="emotionkeyword-box">
                <div className="abs-img">
                    <div onMouseEnter={() => SetShowInfo(true)} onMouseLeave={() => SetShowInfo(false)}>
                        <InfoSVG/>
                    </div>
                    <div className="emtionkeyword-info" style={{visibility : showInfo ? "visible" : "hidden"}}>
                        <span>해당 기간동안 가장 많이 선택한<br></br> 감정 키워드 5종류와 횟수입니다</span>
                    </div>
                </div>
                <div className="emotion-mining">
                    <EmotionKeywordItem top={60} left={40} emotion={"즐거운"} count={"34회"} isPositive={true} padding={180}/>
                    <EmotionKeywordItem top={90} left={220} emotion={"피곤한"} count={"30회"} isPositive={true} padding={140}/>
                    <EmotionKeywordItem top={240} left={60} emotion={"화난"} count={"16회"} isPositive={false} padding={80}/>
                    <EmotionKeywordItem top={220} left={170} emotion={"그럭저럭"} count={"28회"} isPositive={true} padding={120}/>
                    <EmotionKeywordItem top={220} left={300} emotion={"우울한"} count={"20회"} isPositive={false} padding={120}/>
                </div>
            </div>
        </Container>
    );
}

export default EmotionKeyword;