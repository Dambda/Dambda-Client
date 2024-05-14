import styled, { keyframes } from "styled-components";
import theme from "@/styles/theme";
import ItemImg1 from "../../assets/home-img1.png"
import ItemImg2 from "../../assets/home-img2.png"
import ItemImg3 from "../../assets/home-img3.png"

const imgArr = [ItemImg1, ItemImg2, ItemImg3];

const hoverList = keyframes`
    0% {
        width: 6px;
        background-color: ${theme.color.gray40};
    }
    100% {
        width: 20px;
        background-color: ${theme.color.primary};
    }
`

const Container = styled.div`
    display: flex;
    padding: 20px 0px;
    flex-direction : column;
    align-items: center;
    gap: 30px;
    & .h3 {
        width: 100%;
        text-align: left;
        font-size: 24px;
        font-weight: 600;
    }
    & ul {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 5px;
    }
    & li {
        width: 6px;
        height: 6px;
        background-color: ${theme.color.gray40};
        border: none;
        border-radius: 10px;
    }
    & .activeList {
        animation: ${hoverList} 0.3s ease-in-out forwards;
    }
`;

const RecommendItem = styled.div`
    width: 300px;
    height: 180px;
    border: none;
    border-radius: 20px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${(props) => `url(${imgArr[props.index]})`};
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & div {
        width: 200px;
        font-size: 16px;
        font-weight: bold;
        line-height : 30px;
        color: ${theme.color.white};
    }

    &:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${(props) => `url(${imgArr[props.index]})`};
    }
`;

export default {Container, RecommendItem};