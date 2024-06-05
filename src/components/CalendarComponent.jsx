import React, { useEffect, useState } from "react"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import StyledCalendar from "../styles/components/calendar";
import happyPNG from "@/assets/emotion-character/happiness-small.svg";
import EmotionSVG from "@/assets/icon/emotion-icon.svg?react";
import NumberSVG from "@/assets/icon/number10-icon.svg?react";

import { getDiaryToMonth } from "../apis/diary";

const myFormatWeekday = (_locale, date) => {
    const weekdayShortNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return weekdayShortNames[date.getDay()];
  };

const CalendarComponent = ({today, setToday}) => {
    const [isEmotion, setIsEmotion] = useState(false);
    const [diaryData, setDiaryData] = useState([]);

    useEffect(() => {
        handleHasDiary({year : today.getFullYear(), month : today.getMonth() + 1}); // unmount set
    }, [today]);

    const handleHasDiary = async ({year, month}) => {
        try {
            const response = await getDiaryToMonth({year : year, month : month});
            if(response.status === 200){
                setDiaryData(Object.keys(response.data));
            }
        } catch(e) {
            console.error(e);
        }
    }

    const handleActiveStartDateChange = ({ activeStartDate, view }) => {
        handleHasDiary({year : activeStartDate.getFullYear(), month : activeStartDate.getMonth() + 1})
    }
    return (
        <StyledCalendar isemotion={isEmotion.toString()}>
            <div className="emotion-button" onClick={() => setIsEmotion((prev) => !prev)}>
                {isEmotion ? <EmotionSVG/> : <NumberSVG/>}
            </div>
            <Calendar showNavigation locale="en" onActiveStartDateChange={handleActiveStartDateChange} value={today} onChange={setToday} formatShortWeekday={myFormatWeekday} prev2Label={null} next2Label={null} formatMonthYear={(_local, date) => {
                if(date.getMonth() < 10) return (`${date.getFullYear()}. 0${date.getMonth() + 1}`);
                return(`${date.getFullYear()}. ${date.getMonth() + 1}`);
                }}
                tileContent={({date, view}) => {
                    if(view === "month"){
                        const dateString = date.getDate().toString();
                        if(diaryData.includes(dateString) && isEmotion){
                            return <img src={happyPNG}></img>
                        }
                    }
                }} 
                tileClassName={({date, view}) => {
                if(view === "month"){
                    const dateString = date.getDate().toString();
                    if(diaryData.includes(dateString)){
                        return "highlights emotion";
                    }
                }
                
            }}/>
        </StyledCalendar>
    );
}

export default CalendarComponent;