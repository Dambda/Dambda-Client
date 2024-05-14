import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
    width: 100vw;
    height: 56px;

    background-color: ${theme.color.third};
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        color : ${theme.color.white};
        font-size: 16px;
        font-weight: 300;
    }
`;

export default Container;