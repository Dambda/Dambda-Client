import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WritingMenu from '../components/writing/WritingMenu';
import Conatiner from '@/styles/pages/writingpage';
import WritingInput from '../components/writing/WritingInput';
import WritingEtc from '../components/writing/WritingEtc';
import backwardBtn from '@/assets/icon/backward-btn.svg';
import LoadingModal from '../components/writing/LoadingModal';

const WritingPage = () => {
  const [submit, setSubmit] = useState(false);

  return (
    <Conatiner>
      <Link to="/">
        {' '}
        <img className="backward-btn" src={backwardBtn} />
      </Link>
      <WritingMenu />
      <WritingInput onSubmit={setSubmit} />
      <WritingEtc />
      {submit ? <LoadingModal /> : null}
    </Conatiner>
  );
};

export default WritingPage;
