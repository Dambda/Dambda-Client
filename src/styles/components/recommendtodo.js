import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: 8px;
  background-color: ${theme.color.white};

  & .classification {
    position: absolute;
    top: 77px;
    left: 12px;
    font-size: 14px;
    font-weight: 700;
    color: #87d861;
  }

  & .todo-icon {
    position: absolute;
    top: 12px;
    right: 16px;
  }

  & .recommended-phrase {
    position: absolute;
    bottom: 24px;
    left: 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  }
`;

export default { Container };
