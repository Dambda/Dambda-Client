import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.div`
  width: 100%;
  height: 40px;
  position: relative;

  background-color: ${theme.color.white};
`;

const TemplateContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 156px;

  & div {
    display: flex;
    align-items: center;
  }

  & div:first-child {
    margin-right: 24px;
  }

  & span {
    font-size: 14px;
    margin-right: 4px;
  }
`;

const Template = styled.div`
  cursor: pointer;
  & button {
    cursor: pointer;
    font-size: 14px;
    border: none;
    background-color: ${theme.color.white};
  }
`;

const EtcContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 72px;
  left: 569px;
  width: 301px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #eaeaea;

  & img {
    cursor: pointer;
  }
`;

export default { Container, TemplateContainer, Template, EtcContainer };
