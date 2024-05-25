import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 40px;
  width: 744px;
  height: 468px;
  background-color: ${theme.color.white};

  & .loading-spinner {
    position: absolute;
    top: 210px;
    left: 348px;
    width: 48px;
    height: 48px;
    /* margin: auto; */
    border: 5px solid #8594c0;
    border-bottom-color: #47588c;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.5s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  & span {
    position: absolute;
    top: 297px;
    left: 105px;
    font-size: 20px;
    font-weight: 700;
  }

  & .closed-btn {
    width: 24px;
    height: auto;
    position: absolute;
    top: 40px;
    right: 72px;
  }

  & .cancel {
    position: absolute;
    bottom: 53px;
    left: 326px;
    width: 92px;
    height: 40px;
    padding: 8px 16px;
    border: 1px solid ${theme.color.primary};
    border-radius: 300px;
    background-color: ${theme.color.white};
    color: ${theme.color.primary};
  }
`;

export default { Container, ModalContainer };
