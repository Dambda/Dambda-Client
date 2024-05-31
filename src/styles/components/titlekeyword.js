import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > h1 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }

    .titlekeyword-box {
        width: 450px;
        height: 300px;

        background-color: #ffffff;
        border-radius: 16px;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        & > .abs-img {
            position : relative;
            top: -20px;
            left: 200px;
        }
        & > .text-mining {
            width: 350px;
            height: 200px;

            display: flex;
            justify-content: center;
            align-items: center;

            & > span {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
   
`;


export default Container