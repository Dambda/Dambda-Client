import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 152px;
  width: 1440px;
  height: 1180px;

  header {
    /* position: relative;
    top: 152px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 222px;
    margin-bottom: 80px;

    & input {
      width: 744px;
      height: 60px;
      padding: 15px 0 15px 72px;
      border-radius: 200px;
      border: 1px solid #eaeaea;
      background-position: 24px center;
      background-size: 30px 30px;
    }

    & input:focus {
      outline: none;
      border-color: ${theme.color.primary};
    }

    & input::placeholder {
      font-size: 18px;
      color: ${theme.color.gray60};
    }

    h2 {
      font-size: 22px;
      font-weight: 700;
      line-height: 1.3em;
      text-align: center;
    }
  }

  .keyword-container {
    /* position: relative; */
    width: 744px;
    height: 290px;

    h3 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    .emotion-keywords {
      margin-bottom: 30px;
    }

    .keywords {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(85px, auto));
      grid-template-rows: repeat(2, 1fr);
      gap: 12px;
      width: 744px;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border-radius: 300px;
      font-size: 16px;
      font-weight: 500;
      color: white;
      background-color: ${theme.color.primary};
    }
  }
`;

export default Container;
