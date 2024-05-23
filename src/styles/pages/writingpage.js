import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 1000px;
  background-color: ${theme.color.ground};

  & .backward-btn {
    position: relative;
    top: -6px;
    left: 156px;
    cursor: pointer;
  }
`;

export default Container;
