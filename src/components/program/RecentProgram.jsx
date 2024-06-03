import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 80px;

    & > h1 {
        font-size: 24px;
        font-weight: 600;
    }
    & > div {
        display: flex;
        justify-content: center;
        & > span {
            font-size: 20px;
            font-weight: 600;
        }
    }
`;

const RecentProgram = () => {
    return (
        <Container>
            <h1>최근 이용한 프로그램</h1>
            <div>
                <span>앗! 아직 OO에서 제공하는 프로그램을 이용하지 않았어요.</span>
            </div>
        </Container>
    );
}


export default RecentProgram