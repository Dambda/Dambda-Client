import React, { useEffect, useState } from "react";
import CharacterBox from "./CharacterBox";
import Container from "../../styles/components/charactercomponents";

const CharacterComponents = ({date, base}) => {
    const [showDate, setShowDate] = useState(['','','','']);
    useEffect(() => {
        if(base == "월 기준"){
            setShowDate(getMonthDates(date))
        } else {
            setShowDate(getWeekDates(date))
        }
    }, [base, date])

    function getWeekDates(date) {
        const startDate = new Date(date.join("-"));
        const dayOfWeek = startDate.getDay();
        const dayArr = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
        startDate.setDate(startDate.getDate() - dayOfWeek);
    
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            weekDates.push(currentDate.getDate()+"일 "+dayArr[currentDate.getDay()]);
        }

        return(weekDates.sort(() => Math.random() * 0.5).slice(0, 4))
    }

    function getMonthDates(date) {
        const dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"
                        , "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"].sort(() => Math.random() - 0.5).slice(0, 4).map((val) => {
                            return (date[1]+"월 "+val+"일")
                        });
        return dates;
    }
    return (    
        <Container>
            <h1>특별했던 감정 Day</h1>
            <div>
                <CharacterBox state={0} date={showDate[0]}/>
                <CharacterBox state={1} date={showDate[1]}/>
            </div>
            <div>
                <CharacterBox state={2} date={showDate[2]}/>
                <CharacterBox state={3} date={showDate[3]}/>
            </div>
        </Container>
    );
}

export default CharacterComponents;