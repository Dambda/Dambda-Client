import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    & > h1 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }

    .emotionkeyword-box {
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
        .emtionkeyword-info {
            background-color: #ffffff;
            position: absolute;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
            width: 180px;
            left: -155px;
            top: 30px;
            z-index: 10;
            border-radius: 4px;
            padding: 5px 12px;
            & > span {
                font-size: 12px;
                line-height: 18px;
            }
            
        }
        & > .emotion-mining {
            width: 350px;
            height: 200px;
            

            & > span {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
   
`;


export default Container;