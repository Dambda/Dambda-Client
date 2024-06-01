import React, { useEffect, useState } from "react";
import HeaderIcon from "./HeaderIcon";
import Container from "@/styles/layout/header";
import HeaderUser from "./HeaderUser";
import LogoIMG from "@/assets/logo-img.png";
import LogoTEXT from "@/assets/logo-text.png";

const Header = ({headerOpt}) => {

    return (
        <div style={{width : "100vw", display : "flex", justifyContent : "center"}}>
            <Container headeropt = {headerOpt}>
                <HeaderUser />
                {
                    headerOpt === "default" ? 
                    <div style={{display : "flex", alignItems : "center", gap : "12px", marginRight : "100px"}}>
                        <img alt="logo-img" src={LogoIMG}></img>
                        <img alt="logo-text" src={LogoTEXT}></img>
                    </div> 
                    : ""
                }
                {
                    headerOpt === "default" ?  <HeaderIcon /> : ""
                }
            </Container>
        </div>
        
    );
}

export default Header;