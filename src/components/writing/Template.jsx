import React, { useState } from 'react';
import TemplateDropdown from './TemplateDropdown';
import Styled from '@/styles/components/writingmenu';
import topic from '@/assets/icon/menu/topic.svg';
import template from '@/assets/icon/menu/template.svg';

const Template = () => {
  const [dropdownView, setDropdownView] = useState(false);

  const handleClick = () => {
    setDropdownView((prev) => !prev);
  };

  const handleClosedClick = () => {
    setDropdownView(false);
  };

  return (
    <>
      <Styled.TemplateContainer>
        <div>
          <span>주제</span>
          <img src={topic}></img>
        </div>
        <Styled.Template onClick={handleClick}>
          <button>템플릿</button>
          <img src={template}></img>
        </Styled.Template>
      </Styled.TemplateContainer>
      {dropdownView && <TemplateDropdown onClick={handleClosedClick} />}
    </>
  );
};

export default Template;
