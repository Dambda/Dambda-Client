import React, { useEffect, useState } from "react";
import Container from "../../styles/components/wordstatistics";

const WordStatistics = ({ date, report }) => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    // 애니메이션 클래스를 적용
    setAnimation("loading");

    // 약간의 딜레이 후 애니메이션 클래스를 제거하여 다음 변화에도 애니메이션 적용 가능
    const timer = setTimeout(() => {
      setAnimation("");
    }, 600); // 1초 후 애니메이션 클래스 제거

    return () => clearTimeout(timer);
  }, [report]); 

  return (
    <Container>
      <h3>OOO님을 위한 감정 레포트</h3>
      <div className={`wordstatistics-grid ${animation}`}>
        <span>
          <mark>{report.useWord.join(" ")}</mark>
          &nbsp;을 주요 단어로 사용했어요.
        </span>
        <span>
          <mark>{date[1] + "월 " + date[2] + "일"}</mark>
          &nbsp;은 이번달&nbsp;
          <mark>{report.emotion}</mark>
          &nbsp;감정이 가장 큰 달이었어요.
        </span>
        <span>
          <mark>{report.choiceWord.join(" ")}</mark>
          &nbsp;을 감정 단어로 자주 선택했어요.
        </span>
        <span>
          <mark>{report.suggestion}</mark>
          &nbsp;를 가장 많이 추천받았어요.
        </span>
      </div>
    </Container>
  );
};

export default WordStatistics;
