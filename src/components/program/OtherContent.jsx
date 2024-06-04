import styled from "styled-components";
import EyeSVG from "@/assets/icon/eye-gray.svg?react"
import HeartSVG from "@/assets/icon/heart.svg?react"

const CardContainer = styled.div`
    width: 360px !important;
    height: 310px;
    flex: 0 0 auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img-box {
        width: 100%;
        height: 190px;
        background-image: url(${(props) => props.img});
        background-size: cover;
        background-position: center;
        border-radius: 5px 5px 0px 0px;
    }
    .content {
        height: 120px;
        background-color: white;
        border-radius: 0px 0px 8px 8px;

        display: flex;
        flex-direction: column;
        gap: 40px;
        border: 1px solid #CCCCCC;
        padding: 8px 12px;
    }
    .content-textbox {
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        .type {
            color: #999999;
            font-size: 12px;
        }
        .content-span {
            font-size: 16px;
            font-weight: 600;
        }
       
    }
    .iconbox {
            display: flex;
            justify-content: flex-end;
            gap: 5px;
            & > div {
                display: flex;
                align-items: center;
                gap: 2px;
                & > span {
                color: #999999;
                font-size: 12px;
                }
            }
            
    }
`;

const OtherContent = ({type = "", content = "", img}) => {
    return (
        <CardContainer img={img}>
            <div className="img-box">
                
            </div>
            <div className="content">
                <div className="content-textbox">
                    <span className="type">{type}</span>
                    <span className="content-span">{content}</span>
                </div>
                <div className="iconbox">
                    <div>
                        <EyeSVG/>
                        <span>2.7k</span>
                    </div>
                    <div>
                        <HeartSVG/>
                        <span>999+</span>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
}

export default OtherContent;