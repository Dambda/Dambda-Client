import styled from 'styled-components';
import theme from '@/styles/theme';

const Input = styled.textarea`
  display: block;
  width: 1128px;
  height: 924px;
  padding: 24px;
  margin: 0 auto;
  resize: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${theme.color.gray60};
    font-size: 16px;
  }
`;

export default Input;
