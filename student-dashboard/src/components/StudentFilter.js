import React from 'react'
import { Link } from 'react-router-dom'

const StudentFilter = (props) => {

    const studentList = [...new Set(props.evaluations.map(evaluation => {
        return evaluation.student
    }))]

    const highlightedStyle = { color: "#68c986" }
    const selectedStudent = props.match.params.StudentEvaluations

    const studentListDisplay = studentList.map(student => {
        return (
            <Link key={student} to={student} >
                <li style={student === selectedStudent ? highlightedStyle : {}}><i className="fas fa-caret-right"></i>  {student}</li></Link>
        )
    })

    const allDataLink = () => {
        return (<Link to="/"><li style={props.location.pathname === "/" ? highlightedStyle : {}}><i className="fas fa-caret-right"></i> All students</li></Link>)
    }

    return (
        <div className="navmenu">
            <h2>Filter by student</h2>
            <ul>
                {allDataLink()}
                {studentListDisplay}
            </ul>
        </div>
    )
}

export default StudentFilter