import { useState } from 'react';
import Styled from '@/styles/pages/calendaranalysispage';
import backwardBtn from '@/assets/icon/backward-btn.svg';
import RecommendTodo from '../components/RecommendTodo';

const CalendarAnalysisPage = () => {
  const recommend = [
    {
      index: '투두',
      icon: 'coffeeIcon',
      text: `따뜻한 커피 한잔과\n 여유 즐겨보기`,
    },
    {
      index: '투두',
      icon: 'bookIcon',
      text: '마음의 여유가 되는 자기개발 에세이 읽어보기',
    },
    {
      index: '투두',
      icon: 'gameIcon',
      text: '오늘 하루의 고생 게임 한판 고?',
    },
  ];

  const [diaryPage, setDiaryPage] = useState(1);

  const handleDiaryPage = (e) => {
    setDiaryPage(e.target.value);
  };
  return (
    <Styled.Container>
      <header>
        <div className="title">
          <img
            src={backwardBtn}
            className="backward-btn"
            alt="backward-button"
          />
          <h2>
            {new Date().getMonth() + 1}월 {new Date().getDate()}일{' '}
            {diaryPage === 1 ? '첫' : '두'}
            번째 일기
          </h2>
          <ul>
            <li
              value={1}
              onClick={handleDiaryPage}
              style={{ backgroundColor: diaryPage == 1 ? '#47588C' : '' }}
            ></li>
            <li
              value={2}
              onClick={handleDiaryPage}
              style={{ backgroundColor: diaryPage == 2 ? '#47588C' : '' }}
            ></li>
          </ul>
        </div>
        <button className="show-diary">일기 보기</button>
      </header>

      <main>
        <div className="analysis"></div>

        <div className="recommend-todo">
          <h3>추천활동</h3>
          <RecommendTodo
            index={recommend[0].index}
            icon={recommend[0].icon}
            text={recommend[0].text}
          />
        </div>
      </main>
    </Styled.Container>
  );
};

export default CalendarAnalysisPage;
