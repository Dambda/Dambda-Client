import { useEffect, useState } from 'react';
import Styled from '@/styles/pages/calendaranalysispage';
import backwardBtn from '@/assets/icon/backward-btn.svg';
import RecommendTodo from '../components/RecommendTodo';
import sadCharacter from '@/assets/emotion-character/sadness.png';

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
      text: '마음의 여유가 되는\n 자기개발 에세이 읽어보기',
    },
    {
      index: '투두',
      icon: 'gameIcon',
      text: '오늘 하루의 고생\n 게임 한판 고?',
    },
    {
      index: '투두',
      icon: 'musicIcon',
      text: '신나는 댄스곡과 함께\n 기분도 펌핑!',
    },
    {
      index: '투두',
      icon: 'drawingIcon',
      text: '내 마음가는대로\n 그림을 그려보기',
    },
    {
      index: '투두',
      icon: 'exerciseIcon',
      text: '신나게 운동하며\n 맘껏 활동하기!',
    },
    {
      index: '투두',
      icon: 'eatSnackIcon',
      text: '좋아하는\n 달콤한 간식 먹기!',
    },
    {
      index: '투두',
      icon: 'eatDeliciousIcon',
      text: '오늘 저녁은\n 맛있는 음식 먹기!',
    },
  ];
  const [diaryPage, setDiaryPage] = useState(1);
  const [character, setCharacter] = useState(1);
  const [randomNum, setRandomNum] = useState([0, 1, 2]);

  const randomNumSelect = () => {
    let arr = [];

    const sameNum = (n) => {
      return arr.find((e) => e === n);
    };

    for (let i = 0; i < 3; i++) {
      let n = Math.floor(Math.random() * recommend.length);
      console.log(sameNum(n));
      if (!sameNum(n)) {
        arr.push(n);
      } else {
        i--;
      }
    }

    // console.log(arr);
    setRandomNum(arr);
  };

  const handleDiaryPage = (e) => {
    setDiaryPage(e.target.value);
    console.log(randomNum);
  };

  const handleEmotionCharacter = (e) => {
    setCharacter(e.target.value);
  };

  useEffect(() => {
    randomNumSelect();
  }, []);
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
              className="diary-page"
              value={1}
              onClick={handleDiaryPage}
              style={{ backgroundColor: diaryPage == 1 ? '#47588C' : '' }}
            ></li>
            <li
              className="diary-page"
              value={2}
              onClick={handleDiaryPage}
              style={{ backgroundColor: diaryPage == 2 ? '#47588C' : '' }}
            ></li>
          </ul>
        </div>
        <button className="show-diary">일기 보기</button>
      </header>

      <main>
        <div className="analysis">
          <div className="character-container">
            <img
              src={sadCharacter}
              className="emotion-character"
              alt="emotion-character"
            />
            <ul>
              <li
                className="character"
                value={1}
                onClick={handleEmotionCharacter}
                style={{ backgroundColor: character == 1 ? '#47588C' : '' }}
              ></li>
              <li
                className="character"
                value={2}
                onClick={handleEmotionCharacter}
                style={{ backgroundColor: character == 2 ? '#47588C' : '' }}
              ></li>
            </ul>
          </div>

          <div className="contents-container">
            <p className="comment">
              이른 아침부터 많은 일이 있던 날이었네요. <br />
              지금 이 순간만큼은 편히 쉬어봐요
            </p>
            <div className="keywords"></div>
          </div>
        </div>

        <div className="recommend-todo">
          <h3>추천활동</h3>
          <div className="todo-container">
            <RecommendTodo
              index={recommend[randomNum[0]].index}
              icon={recommend[randomNum[0]].icon}
              text={recommend[randomNum[0]].text}
            />
            <RecommendTodo
              index={recommend[randomNum[1]].index}
              icon={recommend[randomNum[1]].icon}
              text={recommend[randomNum[1]].text}
            />
            <RecommendTodo
              index={recommend[randomNum[2]].index}
              icon={recommend[randomNum[2]].icon}
              text={recommend[randomNum[2]].text}
            />
          </div>
        </div>
      </main>
    </Styled.Container>
  );
};

export default CalendarAnalysisPage;
