import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from '@/styles/components/modal';
import closedBtn from '@/assets/icon/menu/template-closed-btn.svg';
import SelectionList from './SelectionList';

const SelectionModal = ({ onClick, content }) => {
  // let emotionList = [];
  // let topicList = [];

  // (content.emotions || []).map((item, index) => {
  //   index === 0 || index === 1 || index === 2
  //     ? emotionList.push({ name: item, isChecked: true })
  //     : emotionList.push({ name: item, isChecked: false });
  // });
  // (content.words || []).map((item, index) => {
  //   index === 0 || index === 1 || index === 2
  //     ? topicList.push({ name: item, isChecked: true })
  //     : topicList.push({ name: item, isChecked: false });
  // });

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

  const clickClosedBtn = () => {
    onClick(false);
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

  const addEmotionKeyword = () => {
    setEmotionInputView((prev) => !prev);
  };
  const addTopicKeyword = () => {
    setTopicInputView((prev) => !prev);
  };

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
                <form>
                  <button
                    className="add-btn"
                    type="button"
                    onClick={addEmotionKeyword}
                  />
                  {emotionInputView && (
                    <input placeholder="생각하는 감정이 없다면 +버튼을 눌러서 직접 감정을 추가해주세요" />
                  )}
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
                <form>
                  <button
                    className="add-btn"
                    type="button"
                    onClick={addTopicKeyword}
                  />
                  {topicInputView && (
                    <input
                      className="topic-input"
                      placeholder="생각하는 주제가 없다면 +버튼을 눌러서 직접 감정을 추가해주세요"
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="unselected-btn">미선택</button>
          <button className="selection-complete-btn">
            <Link to="/calendar/analysis">선택 완료</Link>
          </button>
        </div>
      </Styled.SelectionContainer>
    </Styled.Container>
  );
};

export default SelectionModal;
