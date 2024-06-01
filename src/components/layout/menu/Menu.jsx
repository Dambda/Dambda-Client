import React from "react";

import Styled from "@/styles/layout/menu";
import MenuItem from "./MenuItem";

const Menu = ({isFold, setFold}) => {
    const onChange = (value) => {
        localStorage.setItem("fold", JSON.stringify(!isFold));
        setFold(value);
    }

    return (
        <Styled.Container isfold={isFold.toString()} onMouseEnter={(e) => onChange(true)} onMouseLeave={(e) => onChange(false)} className={`${isFold === true ? "active": ""}`}>
            <div>
                <MenuItem isFold = {isFold}/>
            </div>
        </Styled.Container>
    );
}

export default Menu;