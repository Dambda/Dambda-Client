import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../styles/pages/calendardetailpage";
import WidgetSVG from "@/assets/icon/btnwidget-icon.svg?react";
import LeftSVG from "@/assets/icon/left-icon.svg?react";
import MenuSVG from "@/assets/icon/menuball-icon.svg?react";

const numToKr = ["","첫번째", "두번째", "세번째", "네번째", "다섯번째", "여섯번째", "일곱번째", "여덟번째", "아홉번째", "열번째"];

const CalendarDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [diaryPage, setDiaryPage] = useState(1);
    const [commentValue, setCommentValue] = useState("")
    const [commentArr, setCommentArr] = useState([{
        date : new Date(),
        comment : "이 날, 내가 뭔가 기분이 뒤죽박죽이네"
    }])
    const fomattedDay = `${location.state.today.getMonth() + 1}월 ${location.state.today.getDate()}일`;

    const onClickDiaryPage = (e) => {
        setDiaryPage(e.target.value);
    }
    const onChangeInput = (e) => {
        setCommentValue(e.target.value);
    }
    const onClickAddComment = () => {
        setCommentArr([...commentArr, {
            date : new Date(),
            comment : commentValue
        }])
        setCommentValue("");
    }
    return (
        <Container>
            <div className="wrap">
                <div className="calendardetail_header">
                    <div className="calendardetail_header--left">
                        <LeftSVG onClick={() => navigate(-1)}/>
                        <h3>{`${fomattedDay} ${numToKr[diaryPage]} 일기`}</h3>
                        <ul>
                            <li value={1} onClick={(e) => onClickDiaryPage(e)} style={{backgroundColor : diaryPage == 1 ? "#47588C" : ""}}></li>
                            <li value={2} onClick={(e) => onClickDiaryPage(e)} style={{backgroundColor : diaryPage == 2 ? "#47588C" : ""}}></li>
                        </ul>
                    </div>
                    
                    <button className="calendardetail_header--right-btn">분석 보기<WidgetSVG /></button>
                </div>

                <div className="calendardetail_diarytext">
                    {location.state.diaryText}
                </div>

                <div className="calendardetail_comments">
                    <div className="calendardetail_comments_commentlist">
                        {
                            commentArr.map((item, index) => {
                                const formattedDate = `${item.date.getFullYear()}.${item.date.getMonth() + 1}.${item.date.getDate()} ${item.date.getHours()}:${item.date.getMinutes()}`
                                return(
                                    <div className="calendardetail_comments_comment" key={index}>
                                        <div className="calendardetail_comments_comment--header">
                                            <span>{formattedDate}</span>
                                            <MenuSVG/>
                                        </div>
                                        <div className="calendardetail_comments_comment--content">
                                            {item.comment}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="calendardetail_comments_write">
                        <input type="text" value={commentValue} className="calendardetail_comments_write-input" placeholder="일기에 대한 코멘트를 작성할 수 있어요" onChange={(e) => onChangeInput(e)}/>
                        <div className="calendardetail_comments_write--bottom">
                            <button className="calendardetail_comments_write--bottom-btn" onClick={() => onClickAddComment()}>코멘트 작성</button>
                        </div>
                    </div>  
                </div>
            </div> 
        </Container>
    )
}

export default CalendarDetailPage;