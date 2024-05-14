import React from "react";

import Container from "@/styles/pages/homepage";
import HomeBanner from "@/components/home/HomeBanner";
import Recommend from "../components/home/Recommend";
import Todaystory from "../components/home/Todaystory";

const HomePage = () => {
    return (
        <div style={{width : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
            <HomeBanner />
            <Container>
                <Recommend/>
                <Todaystory/>
            </Container>
        </div>
    )
}

export default HomePage;