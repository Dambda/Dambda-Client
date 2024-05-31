import React from "react";
import {ResponsivePie} from "@nivo/pie"
import Container from "../../styles/components/nivopie";

const NivoPie = ({data}) => {

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
                    colors={['#FEF79D', '#C9E5F1', '#F1D8F5', '#F7D6DF']}// 커스터하여 사용할 때
                    borderWidth={0}
                    arcLinkLabelsSkipAngle={0}
                    arcLinkLabelsTextColor="#1D1D1D"
                    activeOuterRadiusOffset={8}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }} // pad 색상에 따라감
                    /**
                     * label (pad에 표현되는 글씨) skip할 기준 각도
                     */
                    arcLabelsSkipAngle={10}
                    theme={{
                        /**
                         * label style (pad에 표현되는 글씨)
                         */
                        labels: {
                            text: {
                                fontSize: 16,
                                fontWeight : "bold",
                                fill: '#A1A1A1',
                            },
                        },
                        /**
                         * legend style (default로 하단에 있는 색상별 key 표시)
                         */
                        legends: {
                            text: {
                                fontSize: 12,
                                fill: '#1D1D1D',
                            },
                        },
                    }}
                    /**
                     * pad 클릭 이벤트
                     */
                    /**
                     * legend 설정 (default로 하단에 있는 색상별 key 표시)
                     */
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