import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & h1 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }

    & > .nivobar-wrap {
        display: flex;
        flex-direction: column;
        padding-bottom: 24px;
        width: 450px;
        height: 300px;
        background-color: #ffffff;
        border-radius: 16px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


export default Container;