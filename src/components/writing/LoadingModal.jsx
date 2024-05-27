import React from 'react';
import Styled from '@/styles/components/modal';
import loadingSpinner from '@/assets/icon/loading-spinner.png';
import closedBtn from '@/assets/icon/menu/template-closed-btn.svg';

const LoadingModal = ({ onClick }) => {
  const handleModal = () => {
    onClick(false);
  };

  return (
    <Styled.Container>
      <Styled.LoadingContainer>
        <img onClick={handleModal} className="closed-btn" src={closedBtn} />
        <img className="loading-spinner" src={loadingSpinner} />
        <span>
          지금 OOO님의 일기에 어울리는 감정과 키워드를 도출하고 있습니다.
        </span>{' '}
        <button className="cancel">분석 생략</button>
      </Styled.LoadingContainer>
    </Styled.Container>
  );
};

export default LoadingModal;
