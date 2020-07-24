import React from 'react'
import { VictoryBar, VictoryGroup, VictoryChart, VictoryAxis, VictoryZoomContainer, VictoryLine, VictoryLegend } from 'victory'
import customTheme from "../styling/theme"
import animations from "../styling/animations"


const ChartDisplay = (props) => {
    const studentName = props.params.StudentEvaluation;
    const purple = "#a888df";
    const blue = "#00bcd6";
    const difficultBarStyle = props.showDifficult ? { data: { fill: purple } } : { data: { fillOpacity: 0 } }
    const funBarStyle = props.showFun ? { data: { fill: blue } } : { data: { fillOpacity: 0 } }
    const difficultLineStyle = props.showDifficult ? { data: { stroke: purple } } : { data: { strokeOpacity: 0 } }
    const funLineStyle = props.showFun ? { data: { stroke: blue } } : { data: { strokeOpacity: 0 } }

    return (
        <div>
            <h1 className="pagetitle">Student evaluations</h1>
            {studentName === undefined ? <h5>Winc FEO 6 - All students</h5> : <h5>Winc FEO 6 - {studentName}</h5>}
            <div className="barchartcontainer">
                <h2>Average ratings by assignment</h2>
                <p>Drag or zoom to see all data</p>
                <VictoryChart
                    theme={customTheme}
                    standalone={true}
                    domainPadding={{ x: 20 }}
                    containerComponent={
                        <VictoryZoomContainer
                            allowZoom={true}
                            allowPan={true}
                            zoomDomain={{ x: [0.5, 29.5] }}
                            zoomDimension="x" />
                    }
                >
                    <VictoryLegend
                        data={[
                            { name: "Difficult", symbol: { fill: purple } },
                            { name: "Fun", symbol: { fill: blue } }
                        ]}
                    />
                    <VictoryGroup
                        offset={8}>

                        <VictoryBar
                            animate={animations.difficult}
                            barWidth={7}
                            style={difficultBarStyle}
                            data={props.formattedData}
                            x="assignment"
                            y="difficult"
                        />

                        <VictoryBar
                            animate={animations.fun}
                            barWidth={7}
                            style={funBarStyle}
                            data={props.formattedData}
                            x="assignment"
                            y="fun"
                        />

                    </VictoryGroup>

                    <VictoryAxis
                        offsetX={10}
                        style={{
                            tickLabels: {
                                padding: 20,
                                angle: -45,
                            }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        crossAxis
                        width={400}
                        height={400}
                        domain={[0, 5]}
                        standalone={false}
                    />
                </VictoryChart>
            </div >
            <div className="linechartcontainer">
                <h2>Average ratings by week</h2>
                <VictoryChart
                    theme={customTheme}
                    standalone={true}
                    domainPadding={{ x: 20 }}
                    containerComponent={
                        <VictoryZoomContainer allowZoom={true} allowPan={true} zoomDomain={{ x: [1, 6] }} zoomDimension="x" />
                    }
                >
                    <VictoryLegend
                        data={[
                            { name: "Difficult", symbol: { fill: purple } },
                            { name: "Fun", symbol: { fill: blue } }
                        ]}
                    />
                    <VictoryLine
                        animate={animations.difficult}
                        style={difficultLineStyle}
                        data={props.weeklyAverages}
                        x="week"
                        y="difficult"
                    />
                    <VictoryLine
                        animate={animations.fun}
                        style={funLineStyle}
                        data={props.weeklyAverages}
                        x="week"
                        y="fun"
                    />
                    <VictoryAxis
                        className="axis"
                        offsetX={10}
                    />
                    <VictoryAxis dependentAxis crossAxis
                        width={400}
                        height={400}
                        domain={[0, 5]}
                        standalone={false} />
                </VictoryChart>
            </div>
        </div>

    )
}

export default ChartDisplay