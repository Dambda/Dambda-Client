import styled, { keyframes } from "styled-components";

const loadingSpan = keyframes`
    0%{
        opacity: 0.5;
        transform: scale(0.9);
    }
   
    100%{
        opacity: 1;
        transform: scale(1);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 24px 0px;
    & h3 {
        font-size: 32px;
        font-weight: 500;
        text-align: center;
    }
    & span {
        font-size: 20px;
        padding: 12px;
        background-color: #f5f7ff;
        animation: 0.6s ease-in-out ${loadingSpan};
    }
    .loading {
        animation: 0.6s ease-in-out ${loadingSpan};
    }
    .wordstatistics-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap : 24px;
    }
    & mark {
        background-color: transparent;
        color : #47588C;
        font-weight: bold;
    }
`;

export default Container;