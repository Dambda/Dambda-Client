import { useEffect, useState } from "react";
import Menu from "./menu/Menu";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet,useLocation } from "react-router-dom";

const Layout = () => {
    const [isShowMenu, setIsShowMenu] = useState("show");
    const [isShowFooter, setIsShowFooter] = useState("show");
    const [headerOpt, setHeaderOpt] = useState("default");
    const location = useLocation();

    const fold = localStorage.getItem('fold');
    const parseFold = fold === null ? false : JSON.parse(fold);
    const [isFold, setIsFold] = useState(parseFold);

    useEffect(() => {
        const locationCheck = location.pathname.split("/");
        if(locationCheck[1] === "writing"){
            setIsShowMenu("none")
            setHeaderOpt("center")
        } else {
            setIsShowMenu("show")
            setHeaderOpt("default");
        }
        if(!locationCheck[2]){
            setIsShowFooter("show")
        } else {
            setIsShowFooter("none");
        }
    }, [location])
    return (
        <>
            <div style={{display : "flex", width : "100%"}}>
                {isShowMenu === "show" && <Menu isFold={isFold} setFold={setIsFold}/>}
                <div style={{width : "100%", backgroundColor : "#F8F8F6"}}>
                    <Header headerOpt={headerOpt}/>
                    <div style={{width : "100vw"}}>
                        <Outlet />
                        { isShowFooter === "show" && <Footer/>}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Layout;