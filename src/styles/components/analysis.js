import styled, { keyframes } from "styled-components";

const load = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-30px);
    }
    50%{
        opacity: 0.5;
        transform: translateX(30px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & > .analysis-emotion {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > ul {
            display: flex;
            gap: 5px;
            & > li {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #EAEAEA;
            }
        }
    }
    & > .analysis-comment {
        width: 558px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
    .analysis-feedback {
        font-size: 20px;
        font-weight : 400;
        line-height: 24px;
    }
    .analysis-words {
        display: flex;
        justify-content: center;
        gap: 14px;
        & > li {
            height: 32px;
            padding: 5px 16px;
            border-radius: 300px;
            border: 1px solid #47588C;
            background-color: #F4F7FF;
            color: #47588C;

            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .analysis-suggestion {
        width: 558px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        header > h1{
            font-size: 20px;
            font-weight: 600;
            text-align: left;
        }
        & > div {
            display: flex;
            gap: 24px;
        }
    }
    .analysis-suggestion-box {
        animation: 0.3s ease-in-out ${load};
        width: 168px;
        height: 168px;
        border-radius: 8px;
        background-color: #ffffff;
        padding: 14px 12px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        & > header {
            display: flex;
            height: 84px;
            justify-content: center;
            align-items: center;
            gap: 60px;
            & > span {
                margin-top : 60px;
                color: #87D861;
                width: 25px;
            }
        }
        & > div {
            font-size: 14px;
            font-weight : 400;
            line-height: 21px;
        }
    }
    .chat {
        position: absolute;
        width: 160px;
        height: 60px;
        background-color: #ffffff;
        border-radius: 4px;

        left: -200px;
        top: 30px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

        padding: 9px 12px;
        font-size: 14px;
        line-height: 21px;
        &::after {
            border-top: 6px solid transparent;
            border-left: 6px solid #ffffff;
            border-right: 6px solid transparent;
            border-bottom: 6px solid transparent;
            content:"";
            position:absolute;
            top:8px;
            left:160px;
        }
    }
`;


export default Container;