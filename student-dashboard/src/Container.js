import React from 'react';
import Slicers from './components/Slicers'
import './App.css';
import ChartContainer from './components/ChartContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      evaluations: [{ student: "", assignment: "", moeilijk: "", leuk: "" }],
      isLoading: true,
      slicers: {
        showMoeilijk: true,
        showLeuk: true
      },
    }
  }

  loadData = () => {
    const jsonData = require('./data/data.json');
    this.setState({
      evaluations: jsonData.evaluations
    }, this.toggleLoading())
  }

  toggleCategories = (category) => {
    this.setState({
      slicers: {
        ...this.state.slicers,
        [category]: !this.state.slicers[category]
      }
    })
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
              <Slicers slicers={this.state.slicers} toggleCategories={this.toggleCategories} />
            </div>
            <main>
              <Route path={["/:StudentEvaluations", "/"]}
                render={(matchProps) => {
                  return (
                    <ChartContainer {...this.state} {...matchProps} />
                  )
                }} />
            </main>
          </Router>
        </div>
      )
    }
  }
}

export default Container;
