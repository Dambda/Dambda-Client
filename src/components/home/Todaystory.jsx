import React from "react";
import Container from "@/styles/components/todaystory";

import BtniconSVG from "@/assets/icon/editfill-btn-icon.svg?react";
import SimpleDiary from "../SimpleDiary";
import { useNavigate } from "react-router-dom";

const loremText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
const Todaystory = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="h3">
                오늘의 이야기
            </div>
            <div>
                <SimpleDiary width={1000} height={200} fontSize={16} text={loremText} commentCount={0}/>
            </div>
            <div className="today-footer">
                <span>또 다른 일도 있었나요?</span>
                <button onClick={() => navigate('writing')}>
                    <span>일기 작성하기</span>
                    <BtniconSVG/>
                </button>
            </div>
        </Container>
    );
}

export default Todaystory;