import styled from "styled-components";
import theme from "@/styles/theme"

const Container = styled.div`
    width: 1000px;
    padding: 8px 0px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color : ${theme.color.black};
    & .item {
        display: flex;
        align-items: center;
        font-weight: 500;
        gap : 5px;
    }
`;


export default Container;