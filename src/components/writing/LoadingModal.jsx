import React from 'react';
import Styled from '@/styles/components/modal';
import loadingSpinner from '@/assets/icon/loading-spinner.svg';
import closedBtn from '@/assets/icon/menu/template-closed-btn.svg';

const LoadingModal = () => {
  return (
    <Styled.Container>
      <Styled.ModalContainer>
        {/* <img className="loading-spinner" src={loadingSpinner} /> */}
        <span className="loading-spinner" />
        <span>
          지금 OOO님의 일기에 어울리는 감정과 키워드를 도출하고 있습니다.
        </span>
        <img className="closed-btn" src={closedBtn} />
        <button className="cancel">분석취소</button>
      </Styled.ModalContainer>
    </Styled.Container>
  );
};

export default LoadingModal;
