import styled from "styled-components";

const Container = styled.div`
    width: 450px;
    height: 400px;
    background-color: #F4F7FF;
    border-radius: 12px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;

    & .header {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }
    & .text {
        padding: 0px 20px;
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 6; // 원하는 라인수
        -webkit-box-orient: vertical
    }
    & ul {
        display: flex;
        justify-content: center;
        gap: 5px;
        & li {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: #EAEAEA;
        }
        & li:hover {
            background-color: #47588C;
        }
    }
`;

export default Container;