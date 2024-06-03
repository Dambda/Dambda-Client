import React from "react";
import RecentProgram from "../components/program/RecentProgram";
import OneMinuteProgram from "../components/program/OneMinuteProgram";
import OtherProgram from "../components/program/OtherProgram";

const ProgramPage = () => {
    return (
        <div style={{display : "flex", justifyContent : "center"}}>
            <div style={{width : "1000px", height : "1200px",display : "flex", flexDirection : "column", gap : "50px"}}>
                <RecentProgram/>
                <div style={{display : "flex", flexDirection : "column", gap : "40px"}}>
                    <OneMinuteProgram/>
                    <OtherProgram/>
                </div>
            </div> 
        </div>
    )
}

export default ProgramPage;