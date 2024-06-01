import React, { useState, useEffect } from "react";
import GpsSVG from "@/assets/icon/header/gps.svg?react";
import CloudSVG from "@/assets/icon/header/cloud.svg?react";

const HeaderUser = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 10000); 

        return () => clearInterval(timer);
    }, []);

    const formattedDate = `${currentTime.getFullYear()}. 
    ${currentTime.getMonth() + 1 < 10 ? "0" + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1}. 
    ${currentTime.getDate() < 10 ? "0" + currentTime.getDate() : currentTime.getDate()}`;
    const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes() < 10 ? "0"+currentTime.getMinutes() : currentTime.getMinutes()}`;

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