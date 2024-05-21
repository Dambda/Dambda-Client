import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    height: 1080px;

    .wrap {
        width: 1000px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .calendardetail_header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .calendardetail_header--left {
        display: flex;
        align-items: center;
        gap: 10px;
        & > h3 {
            font-size: 24px;
            font-weight: 600;
        }
        & > ul {
            display: flex;
            gap: 5px;
            & > li {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #CCCCCC;
            }
        }
    }
    .calendardetail_header--right-btn {
        width: 120px;
        height: 40px;
        border: none;
        border-radius: 300px;

        display: flex;
        justify-content: center;
        gap: 5px;
        align-items: center;
        background-color: #47588C;
        color: #ffffff;
        font-size: 16px;
    }
    .calendardetail_diarytext {
        width: 100%;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 16px;

        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }
    .calendardetail_comments {
        width: 100%;
        padding: 20px 0px;
        border-top: 1px solid #EAEAEA;

        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .calendardetail_comments_write {
        width: 100%;
        padding: 16px;
        background-color: #eaeaea;
        border-radius: 12px;
    }
    .calendardetail_comments_write-input {
        width: 968px;
        background-color: transparent;
        border: none;
        font-size: 14px;
        color : black;
        line-height: 30px;
        &::placeholder {
            color: #999999;
        }
        &:hover {
            outline: none;
        }
    }
    .calendardetail_comments_write--bottom {
        display: flex;
        justify-content: flex-end;
    }
    .calendardetail_comments_write--bottom-btn {
        width: 100px;
        height: 32px;
        border: none;
        border-radius: 300px;
        background-color: #47588C;
        color: #ffffff;
        font-size: 14px;
        font-weight: 400;
        &:hover {
            background-color: transparent;
            color: #47588C;
            border: 1px solid #47588C;
        }
    }
    .calendardetail_comments_comment {
        width: 100%;
        padding: 16px;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .calendardetail_comments_comment--header {
        width: 968px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .calendardetail_comments_comment--content {
        font-size: 14px;
    }
`;


export default Container;