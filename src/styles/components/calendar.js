import styled from "styled-components";
import theme from "@/styles/theme";

const StyledCalendar = styled.div`
    width: 450px;
    .emotion-button {
        position : absolute;
        left: 650px;
        top: 147px;
    }
    .react-calendar {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;

        .react-calendar__month-view {
            abbr {
                font-family: 'Pretendard';
            }
        }
        .react-calendar__navigation__label__labelText {
            font-weight: bold;
            font-size: 20px;
        }
        .react-calendar__navigation__arrow {
            font-size: 20px;
            font-weight: bold;
        }
        .react-calendar__month-view__weekdays {
            width: 450px;
            display: flex;
            gap: 10px;
        }
        .react-calendar__month-view__weekdays abbr {
            color : ${theme.color.white};
            text-decoration: none;
        }
        .react-calendar__month-view__weekdays__weekday {
            border: none;
            border-radius: 6px;
            padding: 0;
            max-width: 55px;
            height: 55px;
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #969FBA;
            color : ${theme.color.white};
        }
        .react-calendar__tile {
            
        }
        //개별 일 button
        .react-calendar__month-view__days__day {
            height: 55px;
            max-width: 55px !important;
            border-radius : 6px;
            font-size: 16px;
        }
        .emotion abbr{
            display: ${(props) => props.isemotion == "true" ? "none" : ""};
        }
        //일 모음 div
        .react-calendar__month-view__days {
            gap: 10px 10px;
            margin-top: 10px;
        }
        //지난 달 다음 달 
        .react-calendar__month-view__days__day--neighboringMonth {
            background-color: #EAEAEA !important;
            color : ${theme.color.gray40} !important;
        }
        .react-calendar__tile--active {
            background-color: ${theme.color.primary};
            color : ${theme.color.white};
        }
        .react-calendar__navigation {
            justify-content: center;
            gap: 30px;
        }
        .react-calendar__navigation__label {
            flex-grow: 0 !important;
        }
        .hightlights {
            background-color: #E4EBFF;
            color: ${theme.color.black};
        }
        
    }
`;

export default StyledCalendar;