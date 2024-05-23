import React, { useState } from 'react';
import FontsDropdown from './FontsDropdown';
import Styled from '@/styles/components/typography';
import expandBtn from '@/assets/icon/menu/expandbtn.svg';
import bold from '@/assets/icon/menu/bold.svg';
import italic from '@/assets/icon/menu/italic.svg';
import underline from '@/assets/icon/menu/underline.svg';
import textAlign from '@/assets/icon/menu/text-align.svg';
import lineHeight from '@/assets/icon/menu/line-height.svg';
import bulletMark from '@/assets/icon/menu/bullet-mark.svg';

const Typography = () => {
  const [fontType, setFontType] = useState('맑은 고딕');
  const [fontsView, setFontsView] = useState(false);

  const handleFontType = (item) => {
    setFontType(item);
    setFontsView(false);
  };

  const handleFontClick = () => {
    setFontsView(!fontsView);
  };

  return (
    <>
      <Styled.Container>
        <Styled.Fonts onClick={handleFontClick}>
          <span>{fontType}</span>
          <img src={expandBtn}></img>
        </Styled.Fonts>
        <Styled.FontSize>
          <span>16pt</span>
          <img src={expandBtn}></img>
        </Styled.FontSize>
        <Styled.FontStyleContainer>
          <img src={bold}></img>
          <img src={italic}></img>
          <img src={underline}></img>
          <img src={textAlign}></img>
          <img src={lineHeight}></img>
          <img src={bulletMark}></img>
        </Styled.FontStyleContainer>
      </Styled.Container>
      {fontsView && <FontsDropdown onClick={handleFontType} />}
    </>
  );
};

export default Typography;
