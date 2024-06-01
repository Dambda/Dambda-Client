import React, { useEffect, useState } from "react"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import StyledCalendar from "../styles/components/calendar";

import sadPNG from "@/assets/sad.png";
import EmotionSVG from "@/assets/icon/emotion-icon.svg?react";
import NumberSVG from "@/assets/icon/number10-icon.svg?react";

import { getDiaryToMonth } from "../apis/diary";

const myFormatWeekday = (_locale, date) => {
    const weekdayShortNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return weekdayShortNames[date.getDay()];
  };

const CalendarComponent = ({today, setToday}) => {
    const [isEmotion, setIsEmotion] = useState(false);
    const [hasDiaryMonth, setHasDiaryMonth] = useState([]);
    useEffect(() => {
        
    }, [today]);
    const handleDiaryMonth = async() => {
        const data = getDiaryToMonth
    }
    return (
        <StyledCalendar isemotion={isEmotion.toString()}>
            <div className="emotion-button" onClick={() => setIsEmotion((prev) => !prev)}>
                {isEmotion ? <EmotionSVG/> : <NumberSVG/>}
            </div>
            <Calendar showNavigation locale="en" value={today} onChange={setToday} formatShortWeekday={myFormatWeekday} prev2Label={null} next2Label={null} formatMonthYear={(_local, date) => {
                if(date.getMonth() < 10) return (`${date.getFullYear()}. 0${date.getMonth() + 1}`);
                return(`${date.getFullYear()}. ${date.getMonth() + 1}`);
                }}
                tileContent={({date, view}) => {
                    if(view === "month" && date.getDate() === 15 && isEmotion){
                        return <img src={sadPNG}></img>
                    }
                    else if(view === "month" && date.getDate() === 16){
                        return ""
                    }
                    else if(view === "month" && date.getDate() === 17){
                        return "";
                    }
                }} 
                tileClassName={({date, view}) => {
                if(view === "month"){
                    if(date.getDate() === 15){
                        return "hightlights emotion";
                    }
                }
            }}/>
        </StyledCalendar>
    );
}

export default CalendarComponent;