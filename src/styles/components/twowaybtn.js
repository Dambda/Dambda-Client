import styled from "styled-components";
import theme from "@/styles/theme";

const CustomBtn = styled.button`
    background-color: ${(props) => props.set === "white" ? theme.color.white : theme.color.primary} !important;
    color : ${(props) => props.set === "white" ? theme.color.primary : theme.color.white} !important;
    border: 1px solid ${(props) => props.set === "white" ? theme.color.primary : theme.color.white} !important;

    &:hover {
        background-color: ${(props) => props.set === "white" ? theme.color.primary : theme.color.white} !important;
        color : ${(props) => props.set === "white" ? theme.color.white : theme.color.primary} !important;
        border: 1px solid ${(props) => props.set === "white" ? theme.color.white : theme.color.primary} !important;
    }
`;

export default CustomBtn;