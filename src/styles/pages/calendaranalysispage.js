import styled from 'styled-components';
import theme from '@/styles/theme';
import showDiaryIcon from '@/assets/icon/show-diary.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 810px;

  & header {
    display: flex;
    justify-content: space-between;
    width: 936px;
    height: 40px;
    margin-top: 29.5px;

    .title {
      display: flex;
      align-items: center;
    }

    .backward-btn {
      width: 24px;
      heigth: 24px;
      margin-right: 10px;
      cursor: pointer;
    }

    h2 {
      font-size: 24px;
      font-weight: 700;
      margin-right: 12px;
    }

    ul {
      display: flex;
    }

    li {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #cccccc;
      margin-right: 12px;
      cursor: pointer;
    }

    .show-diary {
      display: flex;
      align-items: center;
      width: 124px;
      height: 40px;
      border-radius: 300px;
      border: none;
      padding-left: 16px;
      font-size: 16px;
      font-weight: 500;
      color: ${theme.color.white};
      background-color: ${theme.color.primary};
      background-image: url(${showDiaryIcon});
      background-repeat: no-repeat;
      background-position: 88px 8px;
      cursor: pointer;
    }
  }

  & main {
    .recommend-todo {
      h3 {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
`;
export default { Container };
