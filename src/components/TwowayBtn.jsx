import React from "react";
import CustomBtn from "../styles/components/twowaybtn";

const TwowayBtn = ({text = "", color = "white"}) => {
    return (
        <CustomBtn set={color}>{text}</CustomBtn>
    )
}

export default TwowayBtn;