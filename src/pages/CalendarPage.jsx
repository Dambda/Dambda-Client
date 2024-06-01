import React from "react";
import { useState } from "react";
import CalendarComponent from "../components/CalendarComponent";
import CalendarContent from "../components/CalendarContent";

const dummyData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const CalendarPage = () => {
    const [today, setToday] = useState(new Date());
    console.log(today)
    return (
        <div style={{display : "flex", flexDirection : "column", alignItems : "center"}}>
            <div style={{width : "1000px", height : "1080px", padding : "100px 0px"}}>
                <div style={{display : "flex", justifyContent : "space-between"}}>
                    <CalendarComponent today={today} setToday={setToday}/>
                    <CalendarContent today={today} diaryText={dummyData}/>
                </div>
                
            </div>
        </div>
    )
}

export default CalendarPage;