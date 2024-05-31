import React, { useEffect, useRef, useState } from "react";
import LeftSVG  from "@/assets/icon/arrow-left.svg?react";
import RightSVG from "@/assets/icon/arrow-right.svg?react";
import Container from "../../styles/components/setstatisticsdata";
import DownSVG from "@/assets/icon/arrow-down.svg?react";

const baseList = ["월 기준", "주 기준", "일 기준"];

const SetStatisticsData = ({date, base, setDate, setBase}) => {
    const [isDrop, setIsDrop] = useState(false);
    const selectRef = useRef();
    useEffect(() => {
        const handleClick = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsDrop(false);
            }
          };
        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, [selectRef])

    const onClickLeftBtn = () => {
        const tempDate = [...date];
        if(Number(tempDate[1]) == 1){
            tempDate[1] = "12";
            tempDate[0] = (Number(tempDate[0]) - 1).toString();
        }
        else
        tempDate[1] = (Number(tempDate[1]) - 1).toString().length ===1 ? `0${(Number(tempDate[1]) - 1).toString()}`: `${(Number(tempDate[1]) - 1).toString()}`;;
        setDate(tempDate);
    }

    const onClickRightBtn = () => {
        const tempDate = [...date];
        if(Number(tempDate[1]) == 12){
            tempDate[1] = "01";
            tempDate[0] = (Number(tempDate[0]) + 1).toString();
        }
        else
        tempDate[1] = (Number(tempDate[1]) + 1).toString().length === 1 ? `0${(Number(tempDate[1]) + 1).toString()}`: `${(Number(tempDate[1]) + 1).toString()}`;;
        setDate(tempDate);
    }
    
    return (
        <Container>
            <div className="setstatistics-btnbox">
                <div className="setstatistics-btn" onClick={() => onClickLeftBtn()}>
                    <LeftSVG/>
                </div>
                <span>{date[0]+"."+date[1]}</span>
                <div className="setstatistics-btn" onClick={() => onClickRightBtn()}>
                    <RightSVG/>
                </div>
            </div>
            <div className="setstatistics-select" onClick={() => {setIsDrop((prev) => !prev)}} ref={selectRef}>
                    <div className="setstatistics-select--default">
                        <span>{base}</span>
                        <div>
                            {
                                !isDrop && <DownSVG/> 
                            }
                        </div>
                    </div>
                    
                    {
                        isDrop && baseList.filter((value) => {
                            return value != base
                        }).map((value, index) => {
                            return(
                                <div key={index} onClick={() => setBase(value)}>
                                    <span>{value}</span>
                                </div>
                            );
                        })
                    }
            </div>
        </Container>
    );
}

export default SetStatisticsData;