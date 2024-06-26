import React, { useState, useEffect} from "react";
import {ResponsivePie} from "@nivo/pie"
import Container from "../../styles/components/nivopie";
import { recommend, emotion, randEmotions, words } from "../../constants/report";

function getRandomItems(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const NivoPie = ({date, setReport}) => {
    const [data, setData] = useState([
        { "id": "기쁨", "label": "기쁨", "value": 55 },
        { "id": "슬픔", "label": "슬픔", "value": 15 },
        { "id": "분노", "label": "분노", "value": 10 },
        { "id": "불안", "label": "불안", "value": 20 }
    ]);

    const updateDataRandomly = () => {
        let remaining = 100;
        const newData = data.map((item, index) => {
            const value = index === data.length - 1 
                ? remaining 
                : Math.floor(Math.random() * remaining);
            remaining -= value;
            return { ...item, value };
        });
        return newData; 
    };

    useEffect(() => {
        const newData = updateDataRandomly(); 
        setData(newData); 

        const highestValueEmotion = newData.reduce((prev, current) => {
            return (prev.value > current.value) ? prev : current;
        }).id;
        
        setReport({
            useWord : getRandomItems(words, 3),
            emotion: highestValueEmotion,
            choiceWord : getRandomItems(randEmotions, 3),
            suggestion : getRandomItem(recommend)
        });
    
    }, [date]);

    return (
        <Container>
            <h1>핵심 감정 통계</h1>
            <div className="nivopie-wrap">
                <div style={{width : "350px", height : "300px"}}>
                <ResponsivePie
                    data={data}
                    arcLabel={(d) => `${d.value}%`}
                    margin={{ top: 24, right: 0, bottom: 50, left: 0 }}
                    innerRadius={0}
                    padAngle={0}
                    cornerRadius={0}
                    enableArcLinkLabels={false}
                    colors={['#FEF79D', '#C9E5F1', '#F1D8F5', '#F7D6DF']}
                    borderWidth={0}
                    arcLinkLabelsSkipAngle={0}
                    arcLinkLabelsTextColor="#1D1D1D"
                    activeOuterRadiusOffset={8}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }} 
                    arcLabelsSkipAngle={10}
                    theme={{
                        labels: {
                            text: {
                                fontSize: 16,
                                fontWeight : "bold",
                                fill: '#A1A1A1',
                            },
                        },

                        legends: {
                            text: {
                                fontSize: 12,
                                fill: '#1D1D1D',
                            },
                        },
                    }}
                    legends={[
                        {
                            anchor: 'bottom', // 위치
                            direction: 'row', // item 그려지는 방향
                            justify: false, // 글씨, 색상간 간격 justify 적용 여부
                            translateX: 22, // chart와 X 간격
                            translateY: 40, // chart와 Y 간격
                            itemsSpacing: 0, // item간 간격
                            itemWidth: 90, // item width
                            itemHeight: 18, // item height
                            itemDirection: 'left-to-right', // item 내부에 그려지는 방향
                            itemOpacity: 1, // item opacity
                            symbolSize: 18, // symbol (색상 표기) 크기
                            symbolShape: 'circle', // symbol (색상 표기) 모양
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ],
                        
                        },
                    ]}   
                />
                </div>
            </div>
            
        </Container>
        
        
    );
}

export default NivoPie;