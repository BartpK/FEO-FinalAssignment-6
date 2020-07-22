import React from 'react'
import ChartDisplay from './ChartDisplay'


const ChartContainer = (props) => {
    const weekSelect = props.slicers.showWeeks


    let filteredData;

    if (props.match.url === "/") {
        filteredData = props.evaluations

    } else {
        filteredData = props.evaluations.filter(evaluation => {
            return evaluation.student === props.match.params.StudentEvaluations
        })
    }

    let assignmentList = [...new Set(filteredData.map(evaluation => {
        return evaluation.assignment
    }))].sort()

    if (!weekSelect.week1) {
        assignmentList = assignmentList.filter(assignment => {
            return !assignment.includes('W1')
        })
    }
    if (!weekSelect.week2) {
        assignmentList = assignmentList.filter(assignment => {
            return !assignment.includes('W2')
        })
    }
    if (!weekSelect.week3) {
        assignmentList = assignmentList.filter(assignment => {
            return !assignment.includes('W3')
        })
    }
    if (!weekSelect.week4) {
        assignmentList = assignmentList.filter(assignment => {
            return !assignment.includes('W4')
        })
    }
    if (!weekSelect.week5) {
        assignmentList = assignmentList.filter(assignment => {
            return !assignment.includes('W5')
        })
    }
    if (!weekSelect.week6) {
        assignmentList = assignmentList.filter(assignment => {
            return !assignment.includes('W6')
        })
    }

    console.log("assignmentlist: ", assignmentList)

    const getAverageScore = (assignment, category) => {
        const filteredAssignments = filteredData.filter(evaluation => {
            return evaluation.assignment === assignment
        })
        const averageScore = filteredAssignments.map(evaluation => {
            return evaluation[category]
        }).reduce((total, num) => {

            return parseInt(total) + parseInt(num)
        }) / filteredAssignments.length
        return averageScore
    }

    const getAverageScoreOfWeek = (query, category) => {
        const selectedEvaluations = filteredData.filter(evaluation => {
            return evaluation.assignment.includes(query)
        }).map(evaluation => {
            return evaluation[category]
        })
        const averageScore = selectedEvaluations.reduce((total, num) => {
            return parseInt(total) + parseInt(num)
        }) / selectedEvaluations.length


        return averageScore
    }

    console.log(getAverageScoreOfWeek('W1', 'moeilijk'))

    const formattedData = assignmentList.map(assignment => {
        return {
            assignment: assignment,
            moeilijk: getAverageScore(assignment, 'moeilijk'),
            leuk: getAverageScore(assignment, 'leuk')
        }
    })

    const weeksArray = [
        {
            week: "Week 1",
            query: "W1"
        },
        {
            week: "Week 2",
            query: "W2"
        },
        {
            week: "Week 3",
            query: "W3"
        },
        {
            week: "Week 4",
            query: "W4"
        },
        {
            week: "Week 5",
            query: "W5"
        },
        {
            week: "Week 6",
            query: "W6"
        }
    ]



    const weeklyAverages = weeksArray.map(currentWeek => {
        return {
            week: currentWeek.week,
            moeilijk: getAverageScoreOfWeek(currentWeek.query, 'moeilijk'),
            leuk: getAverageScoreOfWeek(currentWeek.query, 'leuk'),
        }
    })

    console.log(weeklyAverages)















    // assignmentList.filter(assignment => {
    //     return assignment === "w1d1-1"
    // })





    return (
        <ChartDisplay formattedData={formattedData} slicers={props.slicers} params={props.match.params.StudentEvaluations} />
        // <div className="chartcontainer">

        //     <h1 className="pagetitle">Student evaluations</h1>
        //     <h5>Winc FEO 6</h5>
        //     <VictoryChart
        //         animate={{ duration: 200 }}
        //         sortKey="assignment"
        //         standalone={true} domainPadding={{ x: 20 }} height={500} width={1200} containerComponent={
        //             <VictoryZoomContainer allowZoom={true} allowPan={true} zoomDomain={{ x: [0, 25] }} zoomDimension="x" />
        //         } >

        //         <VictoryGroup theme={VictoryTheme.material} offset={12}>
        //             <VictoryBar
        //                 barWidth={10}
        //                 style={{ data: { fill: "#089aff" } }} data={formattedData} x="assignment" y="moeilijk" />
        //             <VictoryBar
        //                 barWidth={10}
        //                 style={{ data: { fill: "1f0a4f" } }} data={formattedData} x="assignment" y="leuk" />

        //         </VictoryGroup>
        //         <VictoryAxis
        //             className="axis"
        //             // offsetY={10}
        //             offsetX={10}
        //             style={{
        //                 tickLabels: {
        //                     fontSize: 14,
        //                     angle: -45,
        //                     padding: 25




        //                 }
        //             }} />
        //         <VictoryAxis dependentAxis crossAxis
        //             width={400}
        //             height={400}
        //             domain={[0, 3]}
        //             theme={VictoryTheme.material}
        //             standalone={false}

        //         />
        //     </VictoryChart>


        // </div >
    )
}

export default ChartContainer