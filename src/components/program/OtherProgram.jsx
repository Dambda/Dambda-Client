import OtherContent from "./OtherContent";
import styled from "styled-components";
import pg1 from "@/assets/program/pg1.png";
import pg2 from "@/assets/program/pg2.png";
import pg3 from "@/assets/program/pg3.png";

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
                    <OtherContent type={"노래"} content={"피곤했던 하루, 30분동안 편하게 있어요"} img={pg1}/>
                    <OtherContent type="운동" content="10분만에 잠든 열정을 깨우기" img={pg2}/>
                    <OtherContent type="명상" content="뇌를 휴식하는 5분의 시간" img={pg3}/>
                </div> 
            </div>
        </Container>
    );
}

export default OtherProgram;