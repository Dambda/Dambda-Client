import { useState } from "react";
import Menu from "./menu/Menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const fold = localStorage.getItem('fold');
    const parseFold = fold === null ? false : JSON.parse(fold);
    // localStorage에서 상태를 불러와 자바스크립트 객체로 변환
    const [isFold, setIsFold] = useState(parseFold);
    // localStorage에서 불러온 상태를 초기값으로 반영

    return (
        <>
            <div style={{display : "flex", width : "100%"}}>
                {true && <Menu isFold={isFold} setFold={setIsFold}/>}
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}


export default Layout;