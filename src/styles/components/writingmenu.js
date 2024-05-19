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

export default { Container, TemplateContainer };
