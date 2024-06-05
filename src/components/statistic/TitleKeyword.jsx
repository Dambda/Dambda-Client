import React, { useState } from "react";
import Container from "../../styles/components/titlekeyword";
import InfoSVG from "@/assets/icon/info.svg?react";

import Keyword1 from "@/assets/keyword-img/keyword-img1.png";
import Keyword2 from "@/assets/keyword-img/keyword-img2.png";
import Keyword3 from "@/assets/keyword-img/keyword-img3.png";

const KeywordImgArr = [Keyword1, Keyword2, Keyword3];
const randNum = Math.floor(Math.random() * 3);
const TitleKeyword = () => {
    const [showInfo, setShowInfo] = useState(false);
    
    return (
        <Container>
            <h1>자주 사용한 주제 키워드</h1>
            <div className="titlekeyword-box">
                <div className="abs-img">
                    <div onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
                        <InfoSVG/>
                    </div>
                    <div className="titlekeyword-info" style={{visibility : showInfo ? "visible" : "hidden"}}>
                        <span>해당 기간동안 가장 많이 선택한<br/> 주제 키워드 20종류입니다</span>
                    </div>
                </div>
                <div className="text-mining">
                    <img src={KeywordImgArr[randNum]} alt="" />
                </div>
            </div>
        </Container>
    );
}


export default TitleKeyword;