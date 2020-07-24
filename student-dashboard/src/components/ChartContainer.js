import React from 'react'
import ChartDisplay from './ChartDisplay'


const ChartContainer = (props) => {
    const weekSelect = props.showWeeks


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
    }))]

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

    const getAverageScoreByAssignment = (assignment, category) => {
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



    let formattedData = assignmentList.map(assignment => {
        return {
            assignment: assignment,
            difficult: getAverageScoreByAssignment(assignment, 'difficult'),
            fun: getAverageScoreByAssignment(assignment, 'fun')
        }
    })

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

    const checkForFilteredWeeks = (query) => {
        const assignmentsByWeek =
            assignmentList.filter(assignment => {
                return assignment.includes(query)
            })
        return assignmentsByWeek.length > 0;
    }

    const weeksArray = [];

    if (checkForFilteredWeeks('W1')) {
        weeksArray.push({
            week: "Week 1",
            query: "W1"
        })
    }
    if (checkForFilteredWeeks('W2')) {
        weeksArray.push({
            week: "Week 2",
            query: "W2"
        })
    }
    if (checkForFilteredWeeks('W3')) {
        weeksArray.push({
            week: "Week 3",
            query: "W3"
        })
    }
    if (checkForFilteredWeeks('W4')) {
        weeksArray.push({
            week: "Week 4",
            query: "W4"
        })
    }
    if (checkForFilteredWeeks('W5')) {
        weeksArray.push({
            week: "Week 5",
            query: "W5"
        })
    }
    if (checkForFilteredWeeks('W6')) {
        weeksArray.push({
            week: "Week 6",
            query: "W6"
        })
    }

    const weeklyAverages = weeksArray.map(currentWeek => {
        return {
            week: currentWeek.week,
            difficult: getAverageScoreOfWeek(currentWeek.query, 'difficult'),
            fun: getAverageScoreOfWeek(currentWeek.query, 'fun'),
        }
    })

    const sortData = (inputData, dimension, direction) => {

        if (direction === "asc") {
            inputData = inputData.sort((a, b) => {
                return (a[dimension] > b[dimension]) ? 1 : -1
            })
        } else {
            inputData = inputData.sort((a, b) => {
                return (a[dimension] < b[dimension]) ? 1 : -1
            })
        }
    }
    sortData(formattedData, props.dimension, props.direction)
    sortData(weeklyAverages, props.dimension === 'assignment' ? 'week' : props.dimension, props.direction)

    return (
        <ChartDisplay
            formattedData={formattedData}
            weeklyAverages={weeklyAverages}
            showDifficult={props.showDifficult}
            showFun={props.showFun}
            params={props.match.params} />
    )
}

export default ChartContainer