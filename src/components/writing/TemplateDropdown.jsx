import React from 'react';
import TemplateDropdownList from './TemplateDropdownList';
import Styled from '../../styles/components/template';
import templateIcon from '@/assets/icon/menu/template-bold.svg';
import closedBtn from '@/assets/icon/menu/template-closed-btn.svg';

const TemplateDropdown = ({ onClick }) => {
  const handleClosedClick = () => onClick();

  return (
    <Styled.Container>
      <div className="header">
        <div className="title">
          <h1>템플릿</h1>
          <img className="template-icon" src={templateIcon} />
        </div>
        <img
          onClick={handleClosedClick}
          className="closed-btn"
          src={closedBtn}
        />
      </div>

      <div className="menu">
        <span className="recommend-template">추천 템플릿</span>
        <span className="total-template">전체 템플릿</span>
        <span className="my-template">내 템플릿</span>
      </div>

      <div className="template-list">
        <span className="total">총 8개</span>
        <TemplateDropdownList />
      </div>
    </Styled.Container>
  );
};

export default TemplateDropdown;
