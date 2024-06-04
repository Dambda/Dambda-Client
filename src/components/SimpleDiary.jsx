import { useNavigate } from "react-router-dom";
import Conatiner from "../styles/components/simplediary";
import TwowayBtn from "./TwowayBtn";
import CommentSVG from "@/assets/icon/comment-icon.svg?react";

const SimpleDiary = ({width = 1000, height = 200, fontSize = 16, text = "", commentCount = 0, diaryNum = 0}) => {
    const navigation = useNavigate();
    const onClickDetailBtn = () => {
        const today = new Date();
        if(diaryNum != null){
            console.log(diaryNum)
            navigation(`calendar/detail/${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`, {
                state : {
                    diaryNum
                }
            })
        }
        
    }
    return (
        <Conatiner style={{width : `${width}px`, height : `${height}px`}}>
            <div className="text" style={{width : `${width - 140}px`, fontSize : `${fontSize}px`}}>
                {text}
            </div>
            <div className="option" style={{width : `${width - 140}px`}}>
                <div style={{display : "flex", alignItems : "center", gap : "5px"}}>
                    <CommentSVG/>
                    <span style={{fontSize : "16px", fontWeight : "400"}}>{commentCount}</span>
                </div>
                <div onClick={onClickDetailBtn}>
                <TwowayBtn color={"white"} text={"자세히 보기"}/>
                </div>
                <TwowayBtn color={"primary"} text={"코멘트 작성"}/>
            </div>
        </Conatiner>
    );
}

SimpleDiary.def

export default SimpleDiary;