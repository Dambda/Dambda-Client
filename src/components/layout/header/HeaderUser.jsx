import React from "react";
import GpsSVG from "@/assets/icon/header/gps.svg?react";
import CloudSVG from "@/assets/icon/header/cloud.svg?react";

const HeaderUser = () => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}`;
    const formattedTime = `${today.getHours()}:${today.getMinutes()}`;

    return (
        <div style={{display:"flex", gap:"10px"}}>
            <div className="item">
                <span>{formattedDate}</span>
            </div>
            <div className="item">
                <GpsSVG />
                <span>안산시</span>
            </div>
            <div className="item">
                <CloudSVG />
                <span>{formattedTime}</span>
            </div>
            
        </div>
    );
}

export default HeaderUser;