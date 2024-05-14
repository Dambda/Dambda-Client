import { useState } from "react";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const fold = localStorage.getItem('fold');
    const parseFold = fold === null ? false : JSON.parse(fold);
    const [isFold, setIsFold] = useState(parseFold);

    return (
        <>
            <div style={{display : "flex", width : "100%"}}>
                {true && <Menu isFold={isFold} setFold={setIsFold}/>}
                <div style={{width : "100%", backgroundColor : "#F8F8F6"}}>
                    <Header/>
                    <div style={{width : "100vw"}}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Layout;