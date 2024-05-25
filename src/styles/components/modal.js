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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 40px;
  width: 744px;
  height: 468px;
  background-color: ${theme.color.white};

  & .closed-btn {
    position: absolute;
    top: 40px;
    right: 72px;
    width: 24px;
    height: auto;
    cursor: pointer;
  }
`;

const LoadingContainer = styled(ContentContainer)`
  & .loading-spinner {
    position: absolute;
    top: 210px;
    left: 348px;
    width: 48px;
    height: 48px;
    display: inline-block;
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
    cursor: pointer;
  }
`;

const SelectionContainer = styled(ContentContainer)`
  justify-content: center;
  align-items: center;
  height: 604px;

  & .content {
    margin-bottom: 24px;
  }

  & .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;

    & h2 {
      margin-bottom: 4px;
      font-size: 20px;
      font-weight: 700;
    }

    & span {
      font-size: 12px;
      color: ${theme.color.gray60};
    }
  }

  & .select {
    width: 552px;
    height: 404px;

    & .emotion-header,
    .topic-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 188px;
      height: 30px;
    }

    & h3 {
      font-size: 20px;
      font-weight: 700;
    }

    & span {
      font-size: 12px;
      color: ${theme.color.third};
    }
  }

  & .buttons {
    display: flex;
    justify-content: space-between;
    width: 324px;
    height: 40px;

    & button {
      width: 150px;
      height: 40px;
      border-radius: 300px;
    }

    & .unselected-btn {
      border: 1px solid ${theme.color.primary};
      color: ${theme.color.primary};
      background-color: ${theme.color.white};
    }

    & .selection-complete-btn {
      border: 1px solid ${theme.color.primary};
      color: ${theme.color.white};
      background-color: ${theme.color.primary};
    }
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    ${({ col }) => (Number(col) === 6 ? 6 : 7)},
    1fr
  );
  grid-auto-rows: minmax(57, auto);
  grid-gap: 12px;
  width: 527px;
  height: 76px;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  border: 1px solid ${theme.color.primary};
  border-radius: 300px;
  font-size: 14px;
  background-color: ${({ checked }) =>
    checked === true ? `${theme.color.primary}` : `${theme.color.white}`};
  color: ${({ checked }) =>
    checked === true ? `${theme.color.white}` : `${theme.color.primary}`};
`;

export default { Container, LoadingContainer, SelectionContainer, Ul, Li };
