import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: ${(props) => props.padding}px;
    height: ${(props) => props.padding}px;
    
    gap: 20px;

    border-radius: 50%;
    background-color: ${(props) => props.condition === "P" ? "#F4F7FF" : "#EAEAEA"};
    .emotion-span--emotion {
        color: ${(props) => props.condition === "P" ? "#47588C" : "#33363F"};
        font-size: 20px;
        font-weight: bold;
    }
    .emotion-span--count { 
        color: ${(props) => props.condition === "P" ? "#89A2D8" : "#999999"};
        font-size: 16px;
        font-weight: bold;
    }
    &:hover {
        transform: scale(1.1);
    }
`;

export default Container;