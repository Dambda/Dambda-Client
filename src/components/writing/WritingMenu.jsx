import React from 'react';
import Styled from '@/styles/components/writingmenu';
import Typography from './Typography';
import Template from './Template';

const WritingMenu = () => {
  return (
    <>
      <Styled.Container>
        <Typography />
        <Template />
      </Styled.Container>
    </>
  );
};

export default WritingMenu;
