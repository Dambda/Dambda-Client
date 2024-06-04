import styled from 'styled-components';
import theme from '@/styles/theme';
import searchIcon from '@/assets/icon/search.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 1440px;
  height: 1180px;

  header {
    position: relative;
    top: 152px;
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
      background-image: url(${searchIcon});
      background-repeat: no-repeat;
      background-position: 24px center;
      background-size: 36px 36px;
    }

    & input:focus {
      outline: none;
      border-color: ${theme.color.primary};
    }

    & input::placeholder {
      font-size: 20px;
      color: ${theme.color.gray60};
    }

    h2 {
      font-size: 28px;
      font-weight: 700;
      line-height: 1.3em;
      text-align: center;
    }
  }
`;

export default Container;
