import React from "react";
import { useState } from "react";
import CalendarComponent from "../components/CalendarComponent";
import CalendarContent from "../components/CalendarContent";

const CalendarPage = () => {
    const [today, setToday] = useState(new Date());

    return (
        <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
            <div style={{width : "1000px", height : "1080px", padding : "100px 0px"}}>
                <div style={{display : "flex", justifyContent : "space-between"}}>
                    <CalendarComponent today={today} setToday={setToday}/>
                    <CalendarContent today={today}/>
                </div>
                
            </div>
        </div>
    )
}

export default CalendarPage;