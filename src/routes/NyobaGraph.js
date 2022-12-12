import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryZoomContainer } from 'victory'
import Navbar from '../component/Navbar'

const NyobaGraph = () => {
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ]


    return (
        <>
            <Navbar></Navbar>
            <div>
                <VictoryChart
                    domainPadding={20}
                    height={1000}
                    containerComponent={<VictoryZoomContainer></VictoryZoomContainer>}
                    style={{
                        parent: {
                            border: "1px solid #ccc"
                        }
                    }}
                >
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    >
                    </VictoryAxis>
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    >
                    </VictoryAxis>
                    <VictoryBar
                        data={data}
                        x="quarter"
                        y="earnings"
                    />
                </VictoryChart>
            </div>
        </>
    )
}

export default NyobaGraph

//yang dibutuhin:
//@visx/zoom
//@visx/tooltip
//@visx/axis
//@visx/curve