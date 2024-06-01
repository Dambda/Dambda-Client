import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WritingMenu from '../components/writing/WritingMenu';
import Conatiner from '@/styles/pages/writingpage';
import WritingInput from '../components/writing/WritingInput';
import WritingEtc from '../components/writing/WritingEtc';
import backwardBtn from '@/assets/icon/backward-btn.svg';
import LoadingModal from '../components/writing/LoadingModal';
import SelectionModal from '../components/writing/SelectionModal';

const WritingPage = () => {
  const [modalView, setModalView] = useState(false);

  return (
    <Conatiner>
      <Link to="/">
        {' '}
        <img className="backward-btn" src={backwardBtn} />
      </Link>
      <WritingMenu />
      <WritingInput onClick={setModalView} />
      <WritingEtc />
      {/* {modalView ? <LoadingModal onClick={setModalView} /> : null} */}
      {modalView ? <SelectionModal onClick={setModalView} /> : null}
    </Conatiner>
  );
};

export default WritingPage;
