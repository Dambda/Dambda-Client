import React, { useState } from "react";

import HomeSVG from "@/assets/icon/menu/home.svg?react";
import DateSVG from "@/assets/icon/menu/date.svg?react";
import ProgramSVG from "@/assets/icon/menu/program.svg?react";
import SearchSVG from "@/assets/icon/menu/search.svg?react";
import SettingSVG from "@/assets/icon/menu/setting.svg?react";
import StatisticsSVG from "@/assets/icon/menu/statistics.svg?react";
import UserSVG from "@/assets/icon/menu/user.svg?react";
import Stlyed from "@/styles/layout/menu?react";
import { useLocation, useNavigate } from "react-router-dom";

const MenuList = [
    {
        text : "홈",
        img : HomeSVG,
        location : ""
    },
    {
        text : "달력",
        img : DateSVG,
        location : "calendar"
    },
    {
        text : "통계",
        img : StatisticsSVG,
        location : "statistics"
    },
    {
        text : "프로그램",
        img : ProgramSVG,
        location : "program"
    },
    {
        text : "검색",
        img : SearchSVG,
        location : "search"
    },
    {

    },
    {
        text : "내 정보",
        img : UserSVG,
        location : "user"
    },
    {
        text : "환경설정",
        img : SettingSVG,
        location : "setting"
    }
];
const MenuItem = ({isFold}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigateFunc = (location) => {
        navigate(`/${location}`);
    }
    const [hoverIndex, setHoverIndex] = useState(-1);
    
    return (
        <Stlyed.Items>
            {
                MenuList.map((listItem, index) => {
                    if(index == 5) return (<Stlyed.MenuHr isfold={isFold.toString()} key={index}/>);
                    const locCheck = listItem.location == location.pathname.split('/')[1];
                    
                    return(
                        <Stlyed.Item isfold={isFold.toString()} key={index} onClick={() => navigateFunc(listItem.location)} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(-1)}>
                            <listItem.img className={locCheck || (hoverIndex === index) ? "svgActive" : ""}/>
                            {
                                isFold && <span style={locCheck || (hoverIndex === index) ? {color : "#1D1D1D"}: {}}>{listItem.text}</span> 
                            }
                        </Stlyed.Item>
                    );
                })
            }
        </Stlyed.Items>
    );
}

export default MenuItem;