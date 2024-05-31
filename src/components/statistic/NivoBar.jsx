import React from "react";
import { ResponsiveBar, Bar } from '@nivo/bar'
import Container from "../../styles/components/nivobar";

  
const format = (v) => `${v}%`;

const NivoBar = () => {
    return (
        <Container>
            <h1>기간별 감정 분포</h1>
            <div className="nivobar-wrap">
                <div style={{width : "450px", height : "300px"}}>
                    <ResponsiveBar

                                data={[{ week: '4주차', 기쁨: 40, 슬픔: 15, 분노: 25, 불안 : 20 },
                                    { week: '3주차', 기쁨: 35, 슬픔 : 25, 분노 : 20, 불안 : 20},
                                    { week: '2주차', 기쁨: 50, 슬픔 : 20, 분노 : 20, 불안 : 10},
                                    { week: '1주차', 기쁨: 40, 슬픔 : 15, 분노 : 25, 불안 : 20 }]}
                                
                                keys={['기쁨', '슬픔', '분노', '불안']}
                                layout="horizontal"
                                indexBy="week"
                                margin={{ top: 24, right: 30, bottom: 60, left: 70 }}
                                padding={0.3}
                                colors={['#FFF8B4', '#C9E5F1', '#F7D6DF', '#F1D8F5']} // 커스터하여 사용할 때
                                colorBy="id"
                                label={(d) => `${d.value}%`}
                                tooltipFormat={{format}}
                                axisBottom={false}// Y축 격자선 제거
                                axisLeft={{
                                    tickSize : 0,
                                    tickPadding : 10
                                }}
                                minValue={0}
                                maxValue={100}
                                labelTextColor={"#A1A1A1"}
                                theme={{
                                    axis: {
                                        ticks: {
                                            text: {
                                                fontSize: 16 // 여기서 폰트 크기를 조절합니다.
                                            },
                                        },
                                    },
                                    legends : {
                                        text : {
                                            fontSize : 12,
                                            fill : "#1D1D1D"
                                        }
                                    },
                                    labels : {
                                        text : {
                                            fontSize : 12,
                                            fontWeight : "bold",
                                            fill : "#A1A1A1"
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
                                    symbolSize: 20,
                                    symbolShape : ({ x, y, size, fill, borderWidth, borderColor }) => (
                                        <circle
                                            cx={x + size / 2}
                                            cy={y + size / 2}
                                            r={size / 2}
                                            fill={fill}
                                            strokeWidth={borderWidth}
                                            stroke={borderColor}
                                        />
                                    ),
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