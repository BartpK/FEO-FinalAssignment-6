import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Mainchart from './components/Mainchart'
import StudentEvaluations from './components/StudentEvaluation'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      evaluations: [{ student: "", assignment: "", moeilijk: "", leuk: "" }],
      isLoading: true
    }
  }

  loadData = () => {
    const jsonData = require('./data/data.json');
    this.setState({
      evaluations: jsonData.evaluations
    }, this.toggleLoading())
  }

  toggleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  componentDidMount() {
    this.loadData();
  }

  render() {

    const studentList = [...new Set(this.state.evaluations.map(evaluation => {
      return evaluation.student
    }))]

    const studentListDisplay = studentList.map(student => {
      return (
        <Link key={student} to={student} > <li>{student}</li></Link>
      )
    })

    const displayItems = this.state.evaluations.map(evali => {
      return (<div><p>{evali.student}, {evali.assignment}, {evali.leuk}, {evali.moeilijk}</p></div>)
    })
    if (this.state.isLoading) {
      return (<h1>Loading...</h1>)
    } else {

      return (
        <div className="maincontainer">

          <Router>
            <div className="navcontainer">
              <ul className="navmenu">
                <Link to="/"><li>All data</li></Link>
                {studentListDisplay}
              </ul>
            </div>
            <main>
              <Route path="/:StudentEvaluations"
                render={(matchProps) => {
                  return (
                    <StudentEvaluations {...this.state} {...matchProps} />
                  )
                }} />
              <Route exact path="/"
                render={(props) => {
                  return (
                    <Mainchart {...this.state} />
                  )
                }}

              />
            </main>


          </Router>
        </div>
      )
    }
  }
}

export default Container;
