import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.div`
  display: flex;
  position: relative;
  /* top: 4px; */
  left: 156px;
  width: 390px;
  height: 32px;

  background-color: ${theme.color.white};
  /* background-color: black; */
`;

const Fonts = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 32px;
  padding: 0;
  margin-right: 12px;
  border: none;
  background-color: ${theme.color.white};

  & span {
    margin-right: 4px;
    font-size: 14px;
  }
`;

const FontSize = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 32px;
  padding: 0;
  margin-right: 12px;
  border: none;
  background-color: ${theme.color.white};

  & span {
    margin-right: 4px;
    font-size: 14px;
  }
`;

const FontStyleContainer = styled.div`
  display: flex;
  align-items: center;
  & img {
    margin-right: 10px;
  }
`;

const FontDropdown = styled.ul`
  position: relative;
  top: 10px;
  left: 144px;
  width: 100px;
  height: 225px;
  border-radius: 8px;
  border: 1px solid ${theme.color.primary};
  background-color: ${theme.color.white};

  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 45px;
    font-size: 14px;
  }

  & li:hover {
    color: ${theme.color.primary};
    cursor: pointer;
  }
`;

export default {
  Container,
  Fonts,
  FontSize,
  FontStyleContainer,
  FontDropdown,
};
