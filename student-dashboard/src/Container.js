import React from 'react';
import Slicers from './components/Slicers'
import './App.css';
import ChartContainer from './components/ChartContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavMenu from "./components/NavMenu"


class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      evaluations: [{ student: "", assignment: "", difficult: "", fun: "" }],
      isLoading: true,
      slicers: {
        showDifficult: true,
        showFun: true,
        showWeeks: {
          week1: true,
          week2: true,
          week3: true,
          week4: true,
          week5: true,
          week6: true
        }
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

  toggleWeeks = (week) => {
    this.setState({
      slicers: {
        ...this.state.slicers,
        showWeeks: {
          ...this.state.slicers.showWeeks,
          [week]: !this.state.slicers.showWeeks[week],
        }
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
        <Link key={student} to={student} >

          <li><i class="fas fa-caret-right"></i>  {student}</li></Link>
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
                <Link to="/"><li><i class="fas fa-caret-right"></i> All data</li></Link>
                {studentListDisplay}
              </ul>
              <Slicers slicers={this.state.slicers} toggleCategories={this.toggleCategories} toggleWeeks={this.toggleWeeks} />
            </div>
            <main>
              <Route path={["/:StudentEvaluations", "/"]}
                render={(matchProps) => {
                  return (
                    <div>
                      {/* <NavMenu {...this.state} {...matchProps} /> */}
                      <ChartContainer {...this.state} {...matchProps} />
                    </div>
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
