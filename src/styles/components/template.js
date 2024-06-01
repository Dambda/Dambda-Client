import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 1188px;
  width: 252px;
  height: 661px;
  background-color: #eaeaea;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

  & .header {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    height: 51px;
    background-color: ${theme.color.white};
    border: 1px solid #eaeaea;
  }

  & .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 113px 0 18px;
    width: 79px;
    height: 27px;
  }

  & h1 {
    font-size: 18px;
    font-weight: 500;
    color: ${theme.color.primary};
    margin-right: 8px;
  }

  & .template-icon {
    width: 24px;
  }

  & .closed-btn {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  & .menu {
    display: flex;
    align-items: center;
    padding-left: 18px;
    height: 30px;
    background-color: ${theme.color.white};
    color: ${theme.color.gray60};

    & span {
      margin-right: 12px;
      font-size: 12px;
    }
  }

  & .recommend-template {
    color: ${theme.color.black};
    font-weight: 500;
  }

  & .template-list {
    padding: 6px 18px;

    & .total {
      display: block;
      margin-bottom: 8px;
      font-size: 12px;
      color: ${theme.color.gray80};
    }
  }
`;

const TemplateItemContainer = styled.div`
  /* position: relative; */
  display: flex;
  width: 216px;
  height: 60px;
  border-radius: 5px;
  margin-bottom: 8px;
  background-color: ${theme.color.white};
  cursor: pointer;

  & div {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  & .template-name {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 700;
    color: ${theme.color.primary};
  }

  & .template-content {
    font-size: 11px;
    color: ${theme.color.black};
  }
`;

export default { Container, TemplateItemContainer };
