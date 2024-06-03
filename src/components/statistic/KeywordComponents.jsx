import React from "react";
import EmotionKeyword from "./EmotionKeyword";
import TitleKeyword from "./TitleKeyword";

const KeywordComponents = () => {
    return (
        <div style={{display : "flex", justifyContent : "center", gap : "24px"}}>
            <EmotionKeyword/>
            <TitleKeyword/>
        </div>
    );
}

export default KeywordComponents;