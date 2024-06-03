import styled from "styled-components";
import EyeSVG from "@/assets/icon/eye.svg?react"

const CardContainer = styled.div`
    width: 260px !important;
    height: 250px;
    flex: 0 0 auto;
    padding: 16px;
    border-radius: 20px;
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    color : #ffffff;
    & > span {
        font-size: 14px;
        font-weight: 600;
    }
    & > div {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

const ContentCard = ({head, company, days, view}) => {
    return (
        <CardContainer>
            <span>
                {head}
            </span>
            <div>
                <span>{company+" ・ "+days}</span>
                <div style={{display : "flex", alignItems : "center", gap : "2px"}}>
                    <EyeSVG/>
                    <span>{view}</span>
                </div>
            </div>
        </CardContainer>
    );
}


export default ContentCard;