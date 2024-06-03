import OtherContent from "./OtherContent";
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
const OtherProgram = () => {
    return (
        <Container>
            <h1>다른 사용자들이 많이 본 프로그램</h1>
            <div className="card-container">
                <div className="card-content">
                    <OtherContent/>
                    <OtherContent/>
                    <OtherContent/>
                    <OtherContent/>
                </div> 
            </div>
        </Container>
    );
}

export default OtherProgram;