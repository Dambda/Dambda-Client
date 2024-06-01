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
  font-size: 16px;

  &::placeholder {
    color: ${theme.color.gray60};
    font-size: 16px;
  }
`;

const CompletedBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -22px;
  right: 156px;
  width: 93px;
  height: 32px;
  border-radius: 8px;
  border: none;
  color: ${theme.color.white};
  background-color: ${theme.color.primary};
  cursor: pointer;

  & span {
    font-size: 14px;
    font-weight: 500;
    margin-right: 4px;
  }
`;

export default { Input, CompletedBtn };
