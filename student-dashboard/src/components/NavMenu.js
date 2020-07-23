import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = (props) => {
    console.log(props)
    const studentList = [...new Set(props.evaluations.map(evaluation => {
        return evaluation.student
    }))]

    const studentListDisplay = studentList.map(student => {
        if (student === props.match.params.StudentEvaluations) {
            return (
                <Link key={student} to={student} >
                    <li style={{ color: "#68c986" }}><i className="fas fa-caret-right"></i>  {student}</li></Link>
            )
        } else {
            return (
                <Link key={student} to={student} >
                    <li><i className="fas fa-caret-right"></i>  {student}</li></Link>
            )
        }
    })

    let allDataLink;

    if (props.location.pathname === "/") {
        allDataLink = (<Link to="/"><li style={{ color: "#68c986" }}><i className="fas fa-caret-right"></i> All students</li></Link>)
    } else {
        allDataLink = (<Link to="/"><li ><i className="fas fa-caret-right"></i> All students</li></Link>)
    }


    return (
        <div className="navmenu">
            <h2>Filter by student</h2>
            <ul>
                {allDataLink}
                {studentListDisplay}
            </ul>
        </div>
    )
}

export default NavMenu