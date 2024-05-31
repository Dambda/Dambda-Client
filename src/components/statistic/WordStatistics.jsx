import React from "react"
import Container from "../../styles/components/wordstatistics";

const report = {
    useWord : ["#OOO교수", "#동아리", "#치킨"],
    emotion : "기쁜",
    choiceWord : ["#피곤한", "#행복한", "#즐거운"],
    suggestion : "달콤한 음식 먹기"
};


const WordStatistics = ({date}) => {
    return (
        <Container>
            <h3>OOO님을 위한 감정 레포트</h3>
            <div className="wordstatistics-grid">
                <span>
                    <mark>{report.useWord.join(" ")}</mark>
                    &nbsp;을 주요 단어로 사용했어요.
                </span>
                <span>
                    <mark>{date[1]+ "월 " + date[2] + "일"}</mark>
                    &nbsp;은 이번달&nbsp;
                    <mark>{report.emotion}</mark>
                    &nbsp;감정이 가장 큰 달이 었어요.
                </span>
                <span>
                    <mark>{report.choiceWord.join(" ")}</mark>
                    &nbsp;을 감정 단어로 자주 선택했어요
                </span>
                <span>
                    <mark>{report.suggestion}</mark>
                    &nbsp;를 가장 많이 추천받았어요
                </span>
            </div>
        </Container>
    );
}

export default WordStatistics;