import React from "react";
import HeaderIcon from "./HeaderIcon";
import Container from "@/styles/layout/header";
import HeaderUser from "./HeaderUser";

const Header = () => {
    
    return (
        <div style={{width : "100vw", display : "flex", justifyContent : "center"}}>
            <Container>
                <HeaderUser />
                <img src="" alt="" />
                <HeaderIcon />
            </Container>
        </div>
        
    );
}

export default Header;