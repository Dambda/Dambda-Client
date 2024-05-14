import React, { useState } from "react";
import Styled from "../../styles/components/recommend";

const Recommend = () => {
    const [hoverIndex, setHoverIndex] = useState(-1);

    return(
        <Styled.Container>
            <div className="h3">오늘의 추천</div>
            <div style={{width: "100%", display:"flex", justifyContent:"space-between", gap : "10px"}}>
                <Styled.RecommendItem index={0} onMouseEnter={() => setHoverIndex(0)} onMouseLeave={() => setHoverIndex(-1)}>
                    <div>싱그러운 봄이 다가오는 3월<br/>오늘, 꽃 구경은 어떠세요?</div>
                </Styled.RecommendItem>
                <Styled.RecommendItem index={1} onMouseEnter={() => setHoverIndex(1)} onMouseLeave={() => setHoverIndex(-1)}>
                    <div>미세먼지 없이 맑은 날,<br/>오늘 하루 어떠셨나요?</div>
                </Styled.RecommendItem>
                <Styled.RecommendItem index={2} onMouseEnter={() => setHoverIndex(2)} onMouseLeave={() => setHoverIndex(-1)}>
                    <div>즐거운 날이었던 어제,<br/>오늘은 어떤 일이 있으셨나요?</div>
                </Styled.RecommendItem>
            </div>
            <ul>
                <li className={hoverIndex === 0 ? "activeList" : ""}></li>
                <li className={hoverIndex === 1 ? "activeList" : ""}></li>
                <li className={hoverIndex === 2 ? "activeList" : ""}></li>
            </ul>
        </Styled.Container>
    );
}

export default Recommend;