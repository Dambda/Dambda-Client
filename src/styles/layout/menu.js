import styled, { css, keyframes } from "styled-components";
import theme from "../theme";

const slideIn = keyframes`
  0% {
    max-width: 80px;
  }
  100% {
    max-width: 140px;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  height: 100%;
  padding: 140px 20px;
  background-color : ${theme.color.white};
  position: fixed;
  z-index: 2;

  ${(props) =>
    props.isfold === "true" &&
    css`
      animation: ${slideIn} 0.3s;
      width: 140px;
    `}
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    color: ${theme.color.gray60};
    overflow: hidden;
    font-size: 14px;
    span {
    ${(props) =>
      props.isfold == "true" &&
      css`
        animation: ${fadeIn} 0.5s ease-in-out forwards;
      `}
    }
    & .svgActive {
      path {
        fill : ${theme.color.black};
      }
    }
`;

const MenuHr = styled.hr`
    border: 1px solid #EAEAEA;
    width: 80%;
`;

export default {Container, Items, Item, MenuHr};