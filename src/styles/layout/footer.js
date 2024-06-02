import styled from "styled-components";

const Container = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    & > .footer-list {
        display: flex;
        gap: 30px;
        & > span {
            font-size: 12px;
        }
    }
    & > .footer-copyright {
        display: flex;
        gap: 8px;
        & > span {
            font-size: 14px;
            font-weight : 600;
        }
    }
`;

export default Container;