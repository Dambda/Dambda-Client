import React from 'react';
import WritingMenu from '../components/writing/WritingMenu';
import Conatiner from '@/styles/pages/writingpage';
import WritingInput from '../components/writing/WritingInput';

const WritingPage = () => {
  return (
    <Conatiner>
      <WritingMenu />
      <WritingInput />
    </Conatiner>
  );
};

export default WritingPage;
