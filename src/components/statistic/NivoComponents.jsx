import React from "react";
import NivoBar from "./NivoBar";
import NivoPie from "./NivoPie";

const data = [
    {
      "id": "기쁨",
      "label": "기쁨",
      "value": 55
    },
    {
      "id": "슬픔",
      "label": "슬픔",
      "value": 15
    },
    {
      "id": "분노",
      "label": "분노",
      "value": 10
    },
    {
      "id": "불안",
      "label": "불안",
      "value": 20
    }
  ];


const NivoComponents = () => {
    return (
        <div style={{display : "flex", justifyContent : "space-between", gap : "50px"}}>
            <NivoPie data={data}/>
            <NivoBar />
        </div>
    );
}


export default NivoComponents;