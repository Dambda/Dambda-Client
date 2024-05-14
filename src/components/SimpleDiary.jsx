import Conatiner from "../styles/components/simplediary";
import TwowayBtn from "./TwowayBtn";
import CommentSVG from "@/assets/icon/comment-icon.svg?react";

const SimpleDiary = ({width = 1000, height = 200, fontSize = 16, text = "", commentCount = 0}) => {
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
                <TwowayBtn color={"white"} text={"자세히 보기"}/>
                <TwowayBtn color={"primary"} text={"코멘트 작성"}/>
            </div>
        </Conatiner>
    );
}

SimpleDiary.def

export default SimpleDiary;