import React from "react";
import NivoBar from "./NivoBar";
import NivoPie from "./NivoPie";

const NivoComponents = ({date, base, setReport}) => {
    return (
        <div style={{display : "flex", justifyContent : "space-between", gap : "50px"}}>
            <NivoPie date={date} setReport={setReport}/>
            <NivoBar date={date} base={base}/>
        </div> 
    );
}

export default NivoComponents;