import React from 'react';
import Container from '@/styles/pages/searchpage';
import SearchSVG from "@/assets/icon/search.svg?react";

const SearchPage = () => {
  const emotionKeywords = [
    '기쁜',
    '억울한',
    '서글픈',
    '짜증나는',
    '긴장되는',
    '만족스러운',
    '정신없는',
    '편안한',
    '고달픈',
    '어지러운',
  ];
  const topicKeywords = [
    '중간고사',
    '학교',
    '친구',
    '도서관',
    '과제',
    '일기',
    '팀플',
    '근로',
    '모두의 마블',
    '혹성탈출',
  ];
  return (
    <Container>
      <header>
        <form>
          <div style={{position : "relative"}}>
            <span style={{position : "absolute", left : "20px", top : "10px"}}>
              <SearchSVG/>
            </span>
            <input placeholder="검색어를 입력해주세요." />
          </div>
        </form>
        <h2>
          작성하였던 내용을 바탕으로 찾거나 <br />
          #을 입력하여 감정을 기반으로 일기를 찾을 수 있어요
        </h2>
      </header>

      <div className="keyword-container">
        <div className="emotion-keywords">
          <h3>그동안 자주 사용한 감정 키워드</h3>
          <ul className="keywords">
            {emotionKeywords.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="topic-keywords">
          <h3>그동안 자주 사용한 주제 키워드</h3>
          <ul className="keywords">
            {topicKeywords.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default SearchPage;
