import React from 'react'
// import { VictoryAxis, VictoryBar, VictoryChart, VictoryZoomContainer } from 'victory'
import Navbar from '../component/Navbar'
import NyobaChartVisx from '../component/NyobaChartVisx'

const NyobaGraph = () => {
    // const data = [
    //     { quarter: 1, earnings: 13000 },
    //     { quarter: 2, earnings: 16500 },
    //     { quarter: 3, earnings: 14250 },
    //     { quarter: 4, earnings: 19000 }
    // ]


    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            {/* <div>
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
            </div> */}
            <div style={{
                height: "200px",
                backgroundColor: "black",
            }}>

            </div>
            <div style={{
                height: "100vh",
                backgroundColor: "#242730",
                position: "relative",
            }}>
                <NyobaChartVisx></NyobaChartVisx>
            </div>
        </>
    )
}

export default NyobaGraph

//yang dibutuhin:
//@visx/zoom    => installed
//@visx/tooltip => installed
//@visx/axis    => installed
//@visx/curve   => installed
//@visx/responsive (?) => installed
//@visx/event (?) => installed
//@visx/scale (?) => installed
//@visx/glyph (?) => installed
//@visx/group (?) => installed
//@visx/shape (?) => installed
//d3 => installed