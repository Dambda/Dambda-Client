import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from '@/styles/components/modal';
import closedBtn from '@/assets/icon/menu/template-closed-btn.svg';
import SelectionList from './SelectionList';
import { getID, getAnaylsis, getEmotionString } from '@/apis/api';
import { getDiaryToDate } from '../../apis/diary';
import BtnSVG from '@/assets/icon/modal-add-btn.svg?react';
import deleteIcon from '@/assets/icon/delete.svg';

const SelectionModal = ({ onClick, content }) => {
  const navigate = useNavigate();
  const emotionList = (content.emotions || []).map((item, index) => ({
    name: item,
    isChecked: index === 0 || index === 1 || index === 2,
  }));

  const topicList = (content.words || []).map((item, index) => ({
    name: item,
    isChecked: index === 0 || index === 1 || index === 2,
  }));

  const [emotionKeyword, setEmotionKeyword] = useState(emotionList);
  const [topicKeyword, setTopicKeyword] = useState(topicList);
  const [emotionInputView, setEmotionInputView] = useState(false);
  const [topicInputView, setTopicInputView] = useState(false);
  const [id, setID] = useState(-1);
  const [diaryNum, setDiaryNum] = useState(0);
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [emotionInputValue, setEmotionInputValue] = useState('');
  const [topicInputValue, setTopicInputValue] = useState('');
  const [emotionDropdown, setEmotionDropdown] = useState(false);

  const [isEmotionSubmit, setIsEmotionSubmit] = useState(false);
  const [submitEmotionValue, setSubmitEmotionValue] = useState('');
  const [isTopicSubmit, setIsTopicSubmit] = useState(false);
  const [submitTopicValue, setSubmitTopicValue] = useState('');

  const clickClosedBtn = () => {
    onClick(false);
  };

  const addEmotionKeyword = () => {
    setEmotionInputView((prev) => !prev);
  };
  const addTopicKeyword = () => {
    setTopicInputView((prev) => !prev);
  };

  const handleKeywordClick = (item) => {
    const { innerText } = item.target;

    setEmotionKeyword((prev) =>
      prev.map((keyword) =>
        keyword.name === innerText
          ? { ...keyword, isChecked: !keyword.isChecked }
          : keyword,
      ),
    );
    setTopicKeyword((prev) =>
      prev.map((keyword) =>
        keyword.name === innerText
          ? { ...keyword, isChecked: !keyword.isChecked }
          : keyword,
      ),
    );
  };

  const idLoad = async (selectedEmotions, selectedTopics) => {
    try {
      const id = await getID(selectedEmotions, selectedTopics);
      setID(id);
    } catch (error) {
      console.error(error);
    }
  };

  const submitEmotionKeyword = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    setEmotionDropdown(false);
    setIsEmotionSubmit(true);
    setSubmitEmotionValue(e.target.innerText);
  };
  const submitTopicKeyword = (e) => {
    console.log(e.target[1].value);
    e.preventDefault();
    setIsTopicSubmit(true);
    setSubmitTopicValue(e.target[1].value);
  };

  const handleEmotionInput = async (e) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      // 입력이 없을 때
      setEmotionInputValue([]); // 입력창 초기화
      setEmotionDropdown(false);
    } else {
      // 입력이 있을 때 데이터 받아오기
      const response = await getEmotionString(inputValue);
      setEmotionInputValue(response.emotions);

      if (response.emotions.length === 0) {
        // 입력 데이터와 일치하는 감정 키워드가 없을 때
        setEmotionDropdown(false);
      } else {
        setEmotionDropdown(true);
      }
    }
  };

  const handleGetTodayIds = async () => {
    try {
      const today = new Date();
      const response = await getDiaryToDate({
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        date: today.getDate(),
      });
      if (response.length !== 0) {
        let idArr = [];
        response.forEach((element) => {
          idArr.push(element.diary.id);
        });
        return idArr.findIndex((value) => value === id);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    const fetchTodayIds = async () => {
      if (id !== -1) {
        try {
          const today = new Date();
          const num = await handleGetTodayIds();

          navigate(
            `/calendar/detail/${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`,
            {
              state: {
                diaryNum: num,
                viewtype: true,
              },
            },
          );
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchTodayIds();
  }, [id]);

  useEffect(() => {
    setSelectedEmotions(
      emotionKeyword.filter((item) => item.isChecked).map((item) => item.name),
    );
    setSelectedTopics(
      topicKeyword.filter((item) => item.isChecked).map((item) => item.name),
    );
  }, [emotionKeyword, topicKeyword]);

  return (
    <Styled.Container>
      <Styled.SelectionContainer
        emotionInputView={emotionInputView}
        topicInputView={topicInputView}
        height="48"
      >
        <img onClick={clickClosedBtn} className="closed-btn" src={closedBtn} />
        <div className="content">
          <div className="header">
            <h2>본인이 생각하는 오늘의 감정과 주제를 선택해주세요</h2>
            <span>
              AI가 제시한 키워드가 본인의 생각과 다르다면 내게 맞는 키워드를
              선택해주세요
            </span>
          </div>

          <div className="select">
            <div className="select-emotion">
              <div className="emotion-header">
                <h3>감정</h3>
                <span>최대 3개까지 선택 가능합니다</span>
              </div>
              <div className="emotion-keywords">
                <SelectionList
                  items={emotionKeyword}
                  col="6"
                  onClick={handleKeywordClick}
                />
                <form onSubmit={submitEmotionKeyword}>
                  <button
                    className="add-btn"
                    type="button"
                    onClick={addEmotionKeyword}
                  >
                    <BtnSVG />
                  </button>
                  {emotionInputView && (
                    <input
                      onChange={handleEmotionInput}
                      // value={emotionInputValue}
                      placeholder={
                        isEmotionSubmit
                          ? ''
                          : '생각하는 감정이 없다면 +버튼을 눌러서 직접 감정을 추가해주세요'
                      }
                    />
                  )}
                  {isEmotionSubmit && (
                    <span
                      className="add-keyword"
                      onClick={() => setIsEmotionSubmit(false)}
                    >
                      {submitEmotionValue}
                      <img src={deleteIcon} alt="delete-icon" />
                    </span>
                  )}
                  <Styled.EmotionDropdown
                    view={emotionDropdown}
                    className="emotion-dropdown"
                  >
                    {emotionDropdown &&
                      emotionInputValue.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                  </Styled.EmotionDropdown>
                </form>
              </div>
            </div>

            <div className="select-topic">
              <div className="topic-header">
                <h3>주제</h3>
                <span>최대 3개까지 선택 가능합니다</span>
              </div>
              <div className="topic-keywords">
                <SelectionList
                  items={topicKeyword}
                  col="7"
                  onClick={handleKeywordClick}
                />
                <form onSubmit={submitTopicKeyword}>
                  <button
                    className="add-btn"
                    type="button"
                    onClick={addTopicKeyword}
                  >
                    <BtnSVG />
                  </button>
                  {topicInputView && (
                    <input
                      className="topic-input"
                      placeholder={
                        isTopicSubmit
                          ? ''
                          : '생각하는 주제가 없다면 +버튼을 눌러서 직접 감정을 추가해주세요'
                      }
                    />
                  )}
                  {isTopicSubmit && (
                    <span
                      className="add-keyword add-topic-keyword "
                      onClick={() => setIsTopicSubmit(false)}
                    >
                      {submitTopicValue}
                      <img src={deleteIcon} alt="delete-icon" />
                    </span>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="unselected-btn">미선택</button>
          <button
            className="selection-complete-btn"
            onClick={() => idLoad(selectedEmotions, selectedTopics)}
          >
            선택 완료
          </button>
        </div>
      </Styled.SelectionContainer>
    </Styled.Container>
  );
};

export default SelectionModal;
