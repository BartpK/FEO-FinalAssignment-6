import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import StudentEvaluations from './StudentEvaluation'

const Nav = (props) => {

    const studentList = [...new Set(props.data.map(evaluation => {
        return evaluation.student
    }))]

    const studentListDisplay = studentList.map(student => {
        return (
            <Router>
                <div>
                    <Link to={student} > <li>{student}</li></Link>
                </div>

            </Router>
        )
    })



    return (
        <div>
            <ul>{studentListDisplay}</ul>


        </div>
    )
}

export default Nav