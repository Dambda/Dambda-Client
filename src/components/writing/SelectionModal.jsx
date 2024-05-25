import React from 'react';
import Styled from '@/styles/components/modal';
import closedBtn from '@/assets/icon/menu/template-closed-btn.svg';
import SelectionList from './SelectionList';
import { mockData } from './mock';

const SelectionModal = ({ onClick }) => {
  const handleModal = () => {
    onClick(false);
  };
  return (
    <Styled.Container>
      <img onClick={handleModal} className="closed-btn" src={closedBtn} />
      <Styled.SelectionContainer>
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
              <h3>감정</h3>
              <span>최대 5개까지 선택 가능합니다</span>
              {/* <SelectionList items={mockData.emotions} /> */}
            </div>

            <div className="select-topic">
              <h3>주제</h3>
              <span>최대 5개까지 선택 가능합니다</span>
              {/* <SelectionList items={mockData.topics} /> */}
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="unselected-btn">미선택</button>
          <button className="selection-complete-btn">선택 완료</button>
        </div>
      </Styled.SelectionContainer>
    </Styled.Container>
  );
};

export default SelectionModal;
