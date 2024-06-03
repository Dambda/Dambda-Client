import styled from "styled-components";

const Container = styled.div`
    width: 450px;
    height: 200px;
    background-color: #ffffff;

    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .characterbox-imgbox {
    }
    & > .characterbox-textbox {
        margin-left: 40px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
    & mark {
        background-color: transparent;
    }
`;

export default Container;