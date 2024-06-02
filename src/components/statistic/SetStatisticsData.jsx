import React, { useEffect, useRef, useState } from "react";
import LeftSVG  from "@/assets/icon/arrow-left.svg?react";
import RightSVG from "@/assets/icon/arrow-right.svg?react";
import Container from "../../styles/components/setstatisticsdata";
import DownSVG from "@/assets/icon/arrow-down.svg?react";

const baseList = ["월 기준", "주 기준", "일 기준"];

const SetStatisticsData = ({date, base, setDate, setBase}) => {
    const [isDrop, setIsDrop] = useState(false);
    const [baseTitle, setBaseTitle] = useState('');
    const selectRef = useRef();

    useEffect(() => {
        handleBaseTitle({date, base})
    }, [base, date]);
    
    useEffect(() => {
        const handleClick = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setIsDrop(false);
            }
          };
        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, [selectRef])

    const onClickLeftBtn = ({base}) => {
        let tempDate = new Date(date[0], date[1] - 1, date[2]); 
        if(base === "월 기준"){
            tempDate.setMonth(tempDate.getMonth() - 1); 
        } else {
            tempDate.setDate(tempDate.getDate() - 1); 
        }
        setDate([tempDate.getFullYear(), tempDate.getMonth() + 1, tempDate.getDate()]);
    }

    const onClickRightBtn = ({base}) => {
        let tempDate = new Date(date[0], date[1] - 1, date[2]); 
        if(base === "월 기준"){
            tempDate.setMonth(tempDate.getMonth() + 1); 
        } else {
            tempDate.setDate(tempDate.getDate() + 1); 
        }
        setDate([tempDate.getFullYear(), tempDate.getMonth() + 1, tempDate.getDate()]);
    }
    
    const handleBaseTitle = ({date, base}) => {
        if(base === "월 기준"){
            setBaseTitle(`${date[0]}.${date[1] < 10 ? "0"+ date[1] : date[1]}`)
        } else {
            setBaseTitle(`${date[0]}.${date[1] < 10 ? "0"+ date[1] : date[1]}.${date[2] < 10 ? "0" + date[2] : date[2]}`)
        }
    }

    return (
        <Container>
            <div className="setstatistics-btnbox">
                <div className="setstatistics-btn" onClick={() => onClickLeftBtn({base})}>
                    <LeftSVG/>
                </div>
                <span>{baseTitle}</span>
                <div className="setstatistics-btn" onClick={() => onClickRightBtn({base})}>
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