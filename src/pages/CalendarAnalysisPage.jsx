import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Styled from '@/styles/pages/calendaranalysispage';
import backwardBtn from '@/assets/icon/backward-btn.svg';
import RecommendTodo from '../components/RecommendTodo';
import happyImg from '@/assets/emotion-character/happiness.png';
import sadImg from '@/assets/emotion-character/sadness.png';
import angerImg from '@/assets/emotion-character/anger.png';
import anxiousImg from '@/assets/emotion-character/anxiety.png';
import { getAnaylsis } from '@/apis/api';
import { getDiaryToDate } from '../apis/diary';

const CalendarAnalysisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  const [characterPage, setCharacterPage] = useState(1);
  const [randomNum, setRandomNum] = useState([0, 1, 2]);
  const [data, setData] = useState();
  const [character, setCharacter] = useState(happyImg);

  let dt = new Date();
  let date = `${dt.getFullYear()}.${dt.getMonth() + 1}.${dt.getDate()}`;

  const getMaxEmotion = (emotionValues) => {
    let maxKey = null;
    let maxValue = -999;

    for (const [key, value] of Object.entries(emotionValues)) {
      if (value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }

    let characterImg;
    switch (maxKey) {
      case 'happy':
        characterImg = happyImg;
        break;
      case 'sad':
        characterImg = sadImg;
        break;
      case 'anger':
        characterImg = angerImg;
        break;
      case 'anxious':
        characterImg = anxiousImg;
        break;
      default:
        characterImg = sadImg;
    }

    setCharacter(characterImg);
  };

  const randomNumSelect = () => {
    let arr = [];

    const sameNum = (n) => {
      return arr.find((e) => e === n);
    };

    for (let i = 0; i < 3; i++) {
      let n = Math.floor(Math.random() * recommend.length);
      if (!sameNum(n)) {
        arr.push(n);
      } else {
        i--;
      }
    }
    setRandomNum(arr);
  };

  const handleDiaryPage = (e) => {
    setDiaryPage(e.target.value);
    console.log(randomNum);
  };

  const handleEmotionCharacterPage = (e) => {
    setCharacterPage(e.target.value);
  };

  const handleLoad = async (id) => {
    try {
      const result = await getAnaylsis(id);
      setData(result);
      getMaxEmotion(result.diary.values);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowDiaryLoad = async () => {
    const response = await getDiaryToDate({
      year: date.split('.')[0],
      month: date.split('.')[1],
      date: date.split('.')[2],
    });
    console.log(response);
  };

  const showDiary = () => {
    handleShowDiaryLoad();
    navigate(`/calendar/detail/${date}`);
  };

  useEffect(() => {
    const id = location.state.id;
    randomNumSelect();
    handleLoad(id);
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
        <button className="show-diary" onClick={showDiary}>
          일기 보기
        </button>
      </header>

      <main>
        <div className="analysis">
          <div className="character-container">
            <img
              src={character}
              className="emotion-character"
              alt="emotion-character"
            />
            <ul>
              <li
                className="character"
                value={1}
                onClick={handleEmotionCharacterPage}
                style={{ backgroundColor: characterPage == 1 ? '#47588C' : '' }}
              ></li>
              <li
                className="character"
                value={2}
                onClick={handleEmotionCharacterPage}
                style={{ backgroundColor: characterPage == 2 ? '#47588C' : '' }}
              ></li>
            </ul>
          </div>

          <div className="contents-container">
            <p className="feedback">{data && data.diary.feedback}</p>
            <div className="keyword-container">
              <ul>
                {data &&
                  data.diary.words.map((item, index) => {
                    return (
                      <li key={index} className="keyword">
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </div>
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
