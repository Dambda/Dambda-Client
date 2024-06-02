import React from "react";
import Container from "../../../styles/layout/footer";

const Footer = () => {
    return (
        <Container>
            <div className="footer-list">
                <span>소개</span>
                <span>블로그</span>
                <span>개인정보처리방침</span>
                <span>약관</span>
                <span>API</span>
                <span>도움말</span>
            </div>
            <div className="footer-copyright">
                <span>ⓒ</span>
                <span>2024 - 담다</span>
            </div>
        </Container>
    );
}

export default Footer;