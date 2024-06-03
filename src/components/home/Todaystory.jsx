import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// style
import Container from "@/styles/components/todaystory";
//img
import BtniconSVG from "@/assets/icon/editfill-btn-icon.svg?react";
//component
import SimpleDiary from "../SimpleDiary";

// call api
import { getDiaryToDate } from "@/apis/diary";

const Todaystory = () => {
    const navigate = useNavigate();
    const [diaryData, setDiaryData] = useState([]);
    useEffect(() => {
        handleGetDiary();
    }, []);

    const handleGetDiary = async () => {
        try {
            const today = new Date();
            const data = await getDiaryToDate({year : today.getFullYear(), month : today.getMonth() + 1, date : today.getDate()})
        
            if(data){
                setDiaryData(data);
            }
        } catch(e) {
            console.error(e);
        }
    }
    return (
        <Container>
            <div className="h3">
                오늘의 이야기
            </div>
            <div style={{display : "flex", flexDirection : "column", gap : "10px"}}>
                {
                    diaryData.length === 0 ? "" :
                    diaryData.map((data, index) => {
                        return(
                            <SimpleDiary key={index} width={1000} height={200} fontSize={16} text={data.diary.content} commentCount={data.commentCount
                            } />
                        );
                    })
                    
                }
            </div>
            <div className="today-footer">
                {
                    diaryData.length === 0 ? <span>앗! 아직 오늘의 이야기를 들려주지 않았어요.</span> : <span>또 다른 일도 있었나요?</span>
                }
                <button onClick={() => navigate('writing')} className="today-footer-writing-button">
                    <span>일기 작성하기</span>
                    <BtniconSVG/>
                </button>
            </div>
        </Container>
    );
}

export default Todaystory;