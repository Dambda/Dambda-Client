import React, { useEffect, useState } from "react";
import SetStatisticsData from "../components/statistic/SetStatisticsData";
import WordStatistics from "../components/statistic/WordStatistics";
import NivoComponents from "../components/statistic/NivoComponents";
import KeywordComponents from "../components/statistic/KeywordComponents";

const DummyDate = "2024-05-28";


const StatisticsPage = () => {
    const [date, setDate] = useState(DummyDate.split("-"));
    const [base, setBase] = useState("월 기준"); // default : 월 기준 (주 기준, 일 기준)
    
    return (
        <div style={{display : "flex", justifyContent : "center"}}>
            <div style={{width : "1000px", display : "flex", flexDirection : "column", gap : "50px"}}>
                <SetStatisticsData date={date} base = {base} setDate={setDate} setBase={setBase}/>
                <WordStatistics date={date}/>
                <NivoComponents/>
                <KeywordComponents/>
            </div>
        </div>
    )
}

export default StatisticsPage;