import React from "react";
import ContentCard from "./ContentCard";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    & > h1 {
        font-size: 24px;
        font-weight: 600;
    }
    .card-container {
        width:  100%;
        overflow-x: hidden;
    }
    .card-content {
        display: inline-flex;
        width: 100%;
        overflow-x: scroll;
        gap: 10px;
    }
`;

const OneMinuteProgram = () => {
    return (
        <Container>
            <h1>1분 콘텐츠</h1>
            <div className="card-container">
                <div className="card-content">
                    <ContentCard/>
                    <ContentCard/>
                    <ContentCard/>
                    <ContentCard/>
                    <ContentCard/>
                </div> 
            </div>
        </Container>
    );
}

export default OneMinuteProgram;