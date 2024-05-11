import React from "react";

import BellSVG from "@/assets/icon/header/bell.svg?react";
import QuestionSVG from "@/assets/icon/header/question.svg?react";

const HeaderIcon = () => {
    return(
        <div style={{display : "flex", gap : "20px"}}>
            <BellSVG/>
            <QuestionSVG/>
        </div>
    );
}

export default HeaderIcon;