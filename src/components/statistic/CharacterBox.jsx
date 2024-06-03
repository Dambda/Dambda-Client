import React from "react";
import Happy from "@/assets/emotion-character/character-happy.png";
import Angry from "@/assets/emotion-character/character-angry.png";
import Sad from "@/assets/emotion-character/character-sad.png";
import Unrest from "@/assets/emotion-character/character-unrest.png";

import Container from "../../styles/components/characterbox";

const ImgArr = [{
    text : "기쁨이",
    img : Happy,
    color : "#FEF79D"
},
{
    text : "슬픔이",
    img : Sad,
    color : "#C9E5F1"
},
{
    text : "분노",
    img : Angry,
    color : "#F7D6DF"
},
{
    text : "불안군",
    img : Unrest,
    color : "#F1D8F5"
}]

const CharacterBox = ({state, date}) => {
    return (
        <Container>
            <div className="characterbox-imgbox">
                <img src={ImgArr[state].img} alt="" />
            </div>
            <div className="characterbox-textbox">
                <span style={{fontSize : "20px", fontWeight : 500}}>
                    <mark style={{color : ImgArr[state].color}}>{ImgArr[state].text}</mark>
                    가 가장 컸던 날
                </span>
                <span style={{fontSize : "24px", fontWeight : 500}}>
                    {date}
                </span>
            </div>
        </Container>
    );
}

export default CharacterBox;