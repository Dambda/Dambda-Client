import styled from "styled-components";

const Container = styled.div`
    padding: 24px 0px;
    .setstatistics-btnbox {
        display: flex;
        justify-content: center;
        & > span {
            font-size: 24px;
            font-weight: 600;
        }
        align-items: center;
        gap: 30px;
    }

    .setstatistics-select {
        position : absolute;
        left: calc(50% + 420px);
        top: 90px;
        width: 80px;
        border: 1px solid #47588C;
        border-radius: 8px;
        & span {
            color: #47588C;
            font-size: 14px;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px 10px;
        gap: 5px;
    }
    .setstatistics-select--default {
        display: flex;
        justify-content: center;
    }
`;


export default Container;