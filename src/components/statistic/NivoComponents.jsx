import React from "react";
import NivoBar from "./NivoBar";
import NivoPie from "./NivoPie";

const NivoComponents = ({date, base, setReport}) => {
    return (
        <div style={{display : "flex", justifyContent : "center", gap : "24px"}}>
            <NivoPie date={date} setReport={setReport}/>
            <NivoBar date={date} base={base}/>
        </div> 
    );
}

export default NivoComponents;