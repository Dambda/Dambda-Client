import styled from 'styled-components';
import theme from '@/styles/theme';
import addBtn from '@/assets/icon/modal-add-btn.svg';

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
  box-shadow: 0 4px 16px (0, 0, 0, 0.1);

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
      margin-bottom: 10px;
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
      margin-bottom: 12px;
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

  & .emotion-keywords,
  .topic-keywords {
    position: relative;

    & .add-btn {
      position: absolute;
      top: 44px;
      right: 10px;
      width: 56px;
      height: 32px;
      border: 1px solid ${theme.color.primary};
      border-radius: 300px;
      background-image: url(${addBtn});
      background-repeat: no-repeat;
      background-position: center center;
      background-color: ${theme.color.white};
      cursor: pointer;
    }

    & input {
      width: 552px;
      height: 48px;
      padding-left: 16px;
      border: 1px solid #eaeaea;
      border-radius: 200px;
    }

    & input::placeholder {
      font-size: 14px;
      color: ${theme.color.gray60};
    }

    & input:focus {
      outline: none;
      border-color: ${theme.color.primary};
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
    minmax(57px, auto)
  );
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 12px;
  width: 552px;
  height: 76px;
  margin-bottom: 24px;
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
  font-weight: ${({ checked }) => (checked === true ? `700` : `500`)};
  cursor: pointer;
`;

export default { Container, LoadingContainer, SelectionContainer, Ul, Li };
