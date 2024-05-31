import React from "react";
import Container from "../../styles/components/titlekeyword";
import InfoSVG from "@/assets/icon/info.svg?react";

const TitleKeyword = () => {
    return (
        <Container>
            <h1>자주 사용한 주제 키워드</h1>
            <div className="titlekeyword-box">
                <div className="abs-img">
                    <InfoSVG/>
                </div>
                <div style={{backgroundColor : "#E89F9F"}} className="text-mining">
                    <span>텍스트 마이닝 이미지</span>
                </div>
            </div>
        </Container>
    );
}


export default TitleKeyword;