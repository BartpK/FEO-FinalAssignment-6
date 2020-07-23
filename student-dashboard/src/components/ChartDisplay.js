import React from 'react'
import { VictoryBar, VictoryGroup, VictoryChart, VictoryAxis, VictoryTheme, VictoryZoomContainer, VictoryLine, VictoryLegend } from 'victory'



const ChartDisplay = (props) => {

    const studentName = props.params;

    const difficultBarStyle = props.slicers.showDifficult ? { data: { fill: "#2DD881" } } : { data: { fillOpacity: 0 } }
    const funBarStyle = props.slicers.showFun ? { data: { fill: "#8447FF" } } : { data: { fillOpacity: 0 } }
    const difficultLineStyle = props.slicers.showDifficult ? { data: { stroke: "#2DD881" } } : { data: { strokeOpacity: 0 } }
    const funLineStyle = props.slicers.showFun ? { data: { stroke: "#8447FF" } } : { data: { strokeOpacity: 0 } }
    console.log(studentName)
    return (
        <div><div className="barchartcontainer">
            <h1 className="pagetitle">Student evaluations</h1>
            {studentName === undefined ? <h5>Winc FEO 6 - all students</h5> : <h5>Winc FEO 6 - {studentName}</h5>}
            <VictoryChart
                // animate={{ duration: 200 }}

                sortKey="assignment"
                standalone={true} domainPadding={{ x: 20 }} height={300} width={1200} containerComponent={
                    <VictoryZoomContainer allowZoom={true} allowPan={true} zoomDomain={{ x: [0, 25] }} zoomDimension="x" />
                }

            >
                <VictoryLegend x={1000} y={0}


                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                    data={[

                        { name: "Difficult", symbol: { fill: "#2DD881" } },
                        { name: "Fun", symbol: { fill: "#8447FF" } }
                    ]}
                />
                <VictoryGroup theme={VictoryTheme.material} offset={12}>

                    <VictoryBar
                        barWidth={10}
                        style={difficultBarStyle} data={props.formattedData} x="assignment" y="difficult" />

                    <VictoryBar
                        barWidth={10}
                        style={funBarStyle} data={props.formattedData} x="assignment" y="fun" />

                </VictoryGroup>
                <VictoryAxis
                    className="axis"
                    // offsetY={10}
                    offsetX={10}
                    style={{
                        tickLabels: {
                            fontSize: 14,
                            angle: -45,
                            padding: 25,
                            color: 'white'

                        }
                    }} />
                <VictoryAxis dependentAxis crossAxis
                    width={400}
                    height={400}
                    domain={[0, 3]}
                    // theme={VictoryTheme.material}
                    standalone={false}

                />
            </VictoryChart>
        </div >
            <div className="linechartcontainer">
                <VictoryChart
                    // animate={{ duration: 200 }}

                    sortKey="assignment"
                    standalone={true} domainPadding={{ x: 20 }} height={300} width={1200} containerComponent={
                        <VictoryZoomContainer allowZoom={true} allowPan={true} zoomDomain={{ x: [1, 6] }} zoomDimension="x" />
                    }
                >
                    <VictoryLine style={difficultLineStyle} data={props.weeklyAverages} x="week" y="difficult" />
                    <VictoryLine style={funLineStyle} data={props.weeklyAverages} x="week" y="fun" />
                    <VictoryAxis
                        className="axis"
                        // offsetY={10}
                        offsetX={10}
                        style={{
                            tickLabels: {
                                fontSize: 14,
                                angle: -45,
                                padding: 25,
                                color: 'white'
                            }
                        }} />
                    <VictoryAxis dependentAxis crossAxis
                        width={400}
                        height={400}
                        domain={[0, 3]}
                        // theme={VictoryTheme.material}
                        standalone={false} />
                </VictoryChart>
            </div>
        </div>
    )
}

export default ChartDisplay