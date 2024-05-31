import { useState } from 'react';
import Styled from '@/styles/pages/calendaranalysispage';
import backwardBtn from '@/assets/icon/backward-btn.svg';

const CalendarAnalysisPage = () => {
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
          <h2>O월 OO일 O번째 일기</h2>
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
      <main></main>
    </Styled.Container>
  );
};

export default CalendarAnalysisPage;
