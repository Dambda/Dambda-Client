import styled from "styled-components";
import EyeSVG from "@/assets/icon/eye.svg?react"

const CardContainer = styled.div`
    width: 260px !important;
    height: 250px;
    flex: 0 0 auto;
    padding: 16px;
    border-radius: 20px;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${(props) => props.imgsrc});
    background-size: cover;
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

const ContentCard = ({head, company, days, view, img}) => {
    return (
        <CardContainer imgsrc={img}>
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