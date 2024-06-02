import React, { useState, useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar';
import Container from "../../styles/components/nivobar";

const NivoBar = ({ date, base }) => {
    const [data, setData] = useState([]);

    const generateData = (base) => {
        const periods = base === '월 기준' ? 4 : 7; 
        const newData = [];
        for (let i = periods; i > 0; i--) {
            const rawHappiness = Math.random();
            const rawSadness = Math.random();
            const rawAnger = Math.random();
            const rawAnxiety = Math.random();
            const total = rawHappiness + rawSadness + rawAnger + rawAnxiety;

            const Happiness = Math.round((rawHappiness / total) * 100);
            const Sadness = Math.round((rawSadness / total) * 100);
            const Anger = Math.round((rawAnger / total) * 100);
            const Anxiety = 100 - (Happiness + Sadness + Anger); 

            newData.push({
                week: `${i}${base === '월 기준' ? "주차" : "일차"}`,
                기쁨: Happiness,
                슬픔: Sadness,
                분노: Anger,
                불안: Anxiety,
            });
        }
        return newData;
    };

    useEffect(() => {
        setData(generateData(base));
    }, [base, date]);

    return (
        <Container>
            <h1>기간별 감정 분포</h1>
            <div className="nivobar-wrap">
                <div style={{ width: "450px", height: "300px" }}>
                    <ResponsiveBar
                        data={data}
                        keys={['기쁨', '슬픔', '분노', '불안']}
                        layout="horizontal"
                        indexBy="week"
                        margin={{ top: 24, right: 30, bottom: 60, left: 70 }}
                        padding={0.3}
                        colors={['#FFF8B4', '#C9E5F1', '#F7D6DF', '#F1D8F5']}
                        colorBy="id"
                        label={(d) => `${d.value}%`}
                        axisBottom={null}
                        axisLeft={{
                            tickSize: 0,
                            tickPadding: 10
                        }}
                        minValue={0}
                        maxValue={100}
                        labelTextColor={"#A1A1A1"}
                        theme={{
                            axis: {
                                ticks: {
                                    text: {
                                        fontSize: 16
                                    },
                                },
                            },
                            legends: {
                                text: {
                                    fontSize: 12,
                                    fill: "#1D1D1D"
                                }
                            },
                            labels: {
                                text: {
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    fill: "#A1A1A1"
                                }
                            }
                        }}
                        legends={[
                            {
                                dataFrom: "keys",
                                anchor: "bottom-left",
                                direction: "row",
                                justify: false,
                                translateX: 0,
                                translateY: 50,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: "left-to-right",
                                itemOpacity: 0.85,
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
        </Container>
    );
}

export default NivoBar;
