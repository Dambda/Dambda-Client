import React from 'react';
import { Link } from 'react-router-dom';
import WritingMenu from '../components/writing/WritingMenu';
import Conatiner from '@/styles/pages/writingpage';
import WritingInput from '../components/writing/WritingInput';
import WritingEtc from '../components/writing/WritingEtc';
import backwardBtn from '@/assets/icon/backward-btn.svg';

const WritingPage = () => {
  return (
    <Conatiner>
      <Link to="/">
        {' '}
        <img className="backward-btn" src={backwardBtn} />
      </Link>
      <WritingMenu />
      <WritingInput />
      <WritingEtc />
    </Conatiner>
  );
};

export default WritingPage;
