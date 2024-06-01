import styled from "styled-components";
import theme from "@/styles/theme";

const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding: 20px 70px;
    background-color: ${theme.color.white};
    border: 0.1px solid #eaeaea;
    border-radius: 20px;
    &:hover {
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    }
    & > .text {
        color : ${theme.color.black};
        font-weight: 400;
        line-height: 35px;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
            
        display: -webkit-box;
        -webkit-line-clamp: 3; // 원하는 라인수
        -webkit-box-orient: vertical
        
    }
    & .option {
        display: flex;
        justify-content: end;
        gap: 20px;

        & button {
            width: 80px;
            height: 32px;
            border-radius: 8px;
        }
    }
`;

export default Conatiner;