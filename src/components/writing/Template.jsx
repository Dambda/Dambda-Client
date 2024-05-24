import React, { useState } from 'react';
import TemplateDropdown from './TemplateDropdown';
import Styled from '@/styles/components/writingmenu';
import topic from '@/assets/icon/menu/topic.svg';
import template from '@/assets/icon/menu/template.svg';
import templateHover from '@/assets/icon/menu/template-hover.svg';

const Template = () => {
  const [dropdownView, setDropdownView] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    setDropdownView((prev) => !prev);
  };

  const handleClosedClick = () => {
    setDropdownView(false);
  };

  return (
    <>
      <Styled.TemplateContainer>
        <div className="topic-menu">
          <span>주제</span>
          <img src={topic}></img>
        </div>
        <Styled.Template
          onClick={handleClick}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <button className="template-menu">템플릿</button>
          {isHover ? (
            <img src={templateHover}></img>
          ) : (
            <img src={template}></img>
          )}
        </Styled.Template>
      </Styled.TemplateContainer>
      {dropdownView && <TemplateDropdown onClick={handleClosedClick} />}
    </>
  );
};

export default Template;
