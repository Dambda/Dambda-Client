import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > h1 {
        font-size: 24px;
        font-weight: 600;
        margin-left: 40px;
    }
    & > div {
        display : flex;
        justify-content: center;
        gap: 24px;
    }
    
    margin-bottom: 300px;
`;

export default Container;