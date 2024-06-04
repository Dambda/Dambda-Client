import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../styles/pages/calendardetailpage';
import WidgetSVG from '@/assets/icon/btnwidget-icon.svg?react';
import LeftSVG from '@/assets/icon/left-icon.svg?react';
import MenuSVG from '@/assets/icon/menuball-icon.svg?react';
import OrderSVG from "@/assets/icon/order.svg?react";
import Analysis from '../components/calendar/Analysis';

import { getDiaryToDate, getDiaryComment, postDiaryComment } from '../apis/diary';

const numToKr = [
  '첫번째',
  '두번째',
  '세번째'
];

const CalendarDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [diaryNum, setDiaryNum] = useState(0);
  const [diaryData, setDiaryData] = useState([]);
  const [diaryId, setDiaryId] = useState([]); 
  const [commentData, setCommentData] = useState([]);

  const [commentText, setCommentText] = useState("");
  const [viewType, setViewType] = useState(false);
  const today = location.pathname.split("/")[3].split(".");
  const formattedDate = `${today[1] < 10 ? "0"+today[1] : today[1]}월 ${today[2] < 10 ? "0"+today[2] : today[2]}일`
  
  useEffect(() => {
    setDiaryNum(location.state.diaryNum);
    handleGetDailyDiary();
  }, [])

  useEffect(() => {
    if(diaryData.length !== 0){
      handleGetDiaryComment({id : diaryId[diaryNum]});
    }
  }, [diaryNum])

  const handleGetDailyDiary = async () => {
      try {
          const response = await getDiaryToDate({year : today[0], month : today[1], date : today[2]});
          if(response.length !== 0){
              setDiaryData(response);
              let idArr = [];
              response.forEach(element => {
                idArr.push(element.diary.id);
              });
              setDiaryId(idArr);
              handleGetDiaryComment({id : response[diaryNum].diary.id})
          }
      } catch(e) {
          console.error(e);
      }
  }

  const handleGetDiaryComment = async ({id}) => {
    try {
      const response = await getDiaryComment({id : id});
      if(response.length !== 0){
        setCommentData(response.data);
      }
    } catch(e) {
      console.error(e);
    }
  }

  const handlePostDiaryComment = async ({content}) => {
    try {
      const request = await postDiaryComment({id : diaryId[diaryNum], content : content});
      if(request.status === 200){
        handleGetDiaryComment({id : diaryId[diaryNum]}) // data reloading
      }
    } catch(e) {
      console.error(e);
    }
    setCommentText("");
  }

  return (
    <Container>
      <div className="wrap">
        <div className="calendardetail_header">
          <div className="calendardetail_header--left">
            <LeftSVG onClick={() => navigate(-1)} />
            <h3>{`${formattedDate} ${numToKr[diaryNum]} 일기`}</h3>
            <ul>
              {
                diaryData.map((_, index) => {
                  return (
                    <li key={index} style={{backgroundColor : index === diaryNum ? "#47588C" : "#EAEAEA"}} onClick={() => setDiaryNum(index)}></li>
                  );
                })
              }
            </ul>
          </div>

          <button className="calendardetail_header--right-btn" onClick={() => setViewType((prev) => !prev)}>
            {
              viewType ? "일기보기" : "분석보기"
            }
            {
              viewType ? <OrderSVG/> : <WidgetSVG/>
            }
          </button>
        </div>
        {
          viewType ? 
          <Analysis data={diaryData} diaryid={diaryNum}/> : 
          <div>
            <div className="calendardetail_diarytext">
              {
                diaryData.length === 0 ? "" : diaryData[diaryNum].diary.content
              }
            </div>
            <div className="calendardetail_comments">
              <div className="calendardetail_comments_commentlist">
                {
                  commentData.length !== 0 && commentData.map((value, index) => {
                      const createdDate = new Date(value.createdAt);
                      return (
                        <div className="calendardetail_comments_comment" key={index}>
                          <div className="calendardetail_comments_comment--header">
                            <span>{`${createdDate.getFullYear()}.${createdDate.getMonth() + 1}.${createdDate.getDate()}  ${createdDate.getHours()}:${createdDate.getMinutes()}`}</span>
                            <MenuSVG />
                          </div>
                          <div className="calendardetail_comments_comment--content">
                            {value.content}
                          </div>
                        </div>
                      );
                  })
                }
                    
              
          </div>
          <div className="calendardetail_comments_write">
            <input
              type="text"
              value={commentText}
              className="calendardetail_comments_write-input"
              placeholder="일기에 대한 코멘트를 작성할 수 있어요"
              onChange={(e) => setCommentText(e.target.value)}
            />
            <div className="calendardetail_comments_write--bottom">
              <button
                className="calendardetail_comments_write--bottom-btn"
                onClick={() => handlePostDiaryComment({content : commentText})}
              >
                코멘트 작성
              </button>
            </div>
          </div>
        </div>
          </div>
        }
        
      </div>
    </Container>
  );
};

export default CalendarDetailPage;
