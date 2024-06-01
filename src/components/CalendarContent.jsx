import React from "react";
import Container from "../styles/components/calendarcontent";
import { useNavigate } from "react-router-dom";


const CalendarContent = ({today, diaryText}) => {
    const navigate = useNavigate();
    const formattedTodays = `${today.getMonth() + 1}월 ${today.getDate()}일의 이야기`;

    return (
        <Container onClick={() => navigate(`detail/${today.getMonth() + 1}-${today.getDate()}`, {
            state : {
                today,
                diaryText
            }
        })}>
            <div className="header">
                {formattedTodays}
            </div>
            <div className="text">
                {diaryText}
            </div>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </Container>
    );
}

export default CalendarContent;