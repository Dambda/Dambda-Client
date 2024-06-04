import React from "react";
import ContentCard from "./ContentCard";
import styled from "styled-components";
import min1 from "../../assets/program/min1.png"
import min2 from "../../assets/program/min2.png"
import min3 from "../../assets/program/min3.png"
import min4 from "../../assets/program/min4.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    & > h1 {
        font-size: 24px;
        font-weight: 600;
    }
    .card-container {
        width:  100%;
        overflow-x: hidden;
    }
    .card-content {
        display: inline-flex;
        width: 100%;
        overflow-x: scroll;
        gap: 10px;
    }
`;

const OneMinuteProgram = () => {
    return (
        <Container>
            <h1>1분 콘텐츠</h1>
            <div className="card-container">
                <div className="card-content">
                    <ContentCard head={"1분만에 보는 행복을 주는 말"} company={"매일일보"} days={"2일 전"} view={"2.7k"} img={min1}/>
                    <ContentCard head={"우리는 왜 고민하고 살아갈까?"} company={"동아일보"} days={"2일 전"} view={"2.7k"} img={min2}/>
                    <ContentCard head={"귀여운 걸 보면 왜 힘이 날까?"} company={"한양일보"} days={"2일 전"} view={"2.7k"} img={min3}/>
                    <ContentCard head={"신나는 노래는 날 더 기쁘게 만들어"} company={"FLO뮤직"} days={"2일 전"} view={"3.7k"} img={min4}/>
                </div> 
            </div>
        </Container>
    );
}

export default OneMinuteProgram;