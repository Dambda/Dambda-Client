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
    margin: 29.5px 0 48px 0;

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

    .diary-page {
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
    .analysis {
      display: flex;
      flex-direction: column;
      align-items: center;

      .character-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;

        .emotion-character {
          width: 144px;
          height: 144px;
          margin-bottom: 8px;
        }

        ul {
          display: flex;
        }

        .character {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: #cccccc;
          margin-right: 12px;
          cursor: pointer;
        }
      }
    }

    .contents-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .feedback {
        width: 400px;
        margin-bottom: 16px;
        line-height: 1.5em;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }

      ul {
        display: flex;
        justify-content: space-between;
        width: 195px;
      }

      .keyword {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 57px;
        height: 32px;
        border-radius: 300px;
        border: 1px solid ${theme.color.primary};
        font-size: 13px;
        font-weight: 500;
        background-color: ${theme.color.back2};
        color: ${theme.color.primary};
      }
    }

    .recommend-todo {
      h3 {
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 700;
      }

      .todo-container {
        display: flex;
        justify-content: space-between;
        width: 552px;
        height: 168px;
        margin: 0 auto;
      }
    }
  }
`;
export default { Container };
