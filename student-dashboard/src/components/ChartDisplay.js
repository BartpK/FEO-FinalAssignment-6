import React from 'react'
import { VictoryBar, VictoryGroup, VictoryChart, VictoryAxis, VictoryTheme, VictoryZoomContainer } from 'victory'



const ChartDisplay = (props) => {


    const moeilijkBarStyle = props.slicers.showMoeilijk ? { data: { fill: "#2DD881" } } : { data: { fillOpacity: 0 } }
    const leukBarStyle = props.slicers.showLeuk ? { data: { fill: "#8447FF" } } : { data: { fillOpacity: 0 } }

    return (
        <div className="chartcontainer">

            <h1 className="pagetitle">Student evaluations</h1>
            <h5>Winc FEO 6</h5>
            <VictoryChart
                animate={{ duration: 200 }}
                sortKey="assignment"
                standalone={true} domainPadding={{ x: 20 }} height={500} width={1200} containerComponent={
                    <VictoryZoomContainer allowZoom={true} allowPan={true} zoomDomain={{ x: [0, 25] }} zoomDimension="x" />
                }
            >

                <VictoryGroup theme={VictoryTheme.material} offset={12}>

                    <VictoryBar
                        barWidth={10}
                        style={moeilijkBarStyle} data={props.formattedData} x="assignment" y="moeilijk" />

                    <VictoryBar
                        barWidth={10}
                        style={leukBarStyle} data={props.formattedData} x="assignment" y="leuk" />

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
    )
}

export default ChartDisplay