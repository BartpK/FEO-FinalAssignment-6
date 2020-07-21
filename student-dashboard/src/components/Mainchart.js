import React from 'react'
import { VictoryBar, VictoryGroup, VictoryChart, VictoryAxis, VictoryTheme, VictoryZoomContainer, VictoryContainer } from 'victory'



const Mainchart = (props) => {

    console.log("mainchart props: ", props)

    const getAverageScore = (assignment, category) => {
        const filteredAssignments = props.evaluations.filter(evaluation => {
            return evaluation.assignment === assignment
        })
        const averageScore = filteredAssignments.map(evaluation => {
            return evaluation[category]
        }).reduce((total, num) => {

            return parseInt(total) + parseInt(num)
        }) / filteredAssignments.length
        return averageScore
    }

    const assignmentList = [...new Set(props.evaluations.map(evaluation => {
        return evaluation.assignment
    }))]


    const formattedData = assignmentList.map(assignment => {
        return {
            assignment: assignment,
            moeilijk: getAverageScore(assignment, 'moeilijk'),
            leuk: getAverageScore(assignment, 'leuk')
        }
    })






    // assignmentList.filter(assignment => {
    //     return assignment === "w1d1-1"
    // })





    return (
        <div className="chartcontainer">

            <h1 className="pagetitle">Student evaluations</h1>
            <h5>Winc FEO 6</h5>
            <VictoryChart
                animate={{ duration: 200 }}
                sortKey="assignment"
                standalone={true} domainPadding={{ x: 20 }} height={500} width={1200} containerComponent={
                    <VictoryZoomContainer allowZoom={true} allowPan={true} zoomDomain={{ x: [0, 25] }} zoomDimension="x" />
                } >

                <VictoryGroup theme={VictoryTheme.material} offset={12}>
                    <VictoryBar
                        barWidth={10}
                        style={{ data: { fill: "#089aff" } }} data={formattedData} x="assignment" y="moeilijk" />
                    <VictoryBar
                        barWidth={10}
                        style={{ data: { fill: "1f0a4f" } }} data={formattedData} x="assignment" y="leuk" />

                </VictoryGroup>
                <VictoryAxis
                    className="axis"
                    // offsetY={10}
                    offsetX={10}
                    style={{
                        tickLabels: {
                            fontSize: 14,
                            angle: -45,
                            padding: 25




                        }
                    }} />
                <VictoryAxis dependentAxis crossAxis
                    width={400}
                    height={400}
                    domain={[0, 3]}
                    theme={VictoryTheme.material}
                    standalone={false}

                />
            </VictoryChart>


        </div >
    )
}

export default Mainchart