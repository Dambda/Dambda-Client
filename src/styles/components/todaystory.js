import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`

    display:  flex;
    flex-direction : column;
    gap: 50px;

    & > .h3 {
        width: 100%;
        text-align: left;
        font-size: 24px;
        font-weight: 600;
    }

    & button {
        width: 150px;
        height: 40px;
        background-color: ${theme.color.primary};
        border: none;
        border-radius: 50px;

        display: flex;
        justify-content: center;
        gap: 5px;
        color : ${theme.color.white};
        align-items: center;
        & > span {
            font-size: 16px;
        }
    }
    & > .today-footer {
        display : flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        & > span {
            font-size: 20px;
            font-weight: 600;
        }
    }
    .today-footer-writing-button {
        &:hover {
            transform: scale(1.025);
        }
    }
`;


export default Container;