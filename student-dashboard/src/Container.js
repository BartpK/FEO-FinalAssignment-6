import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Slicers from './components/Slicers'
import StudentFilter from "./components/StudentFilter"
import ChartContainer from './components/ChartContainer'
import SortData from './components/SortData'
import './App.css';
import { loadData, sortData, toggleCategory, toggleLoading, toggleWeeks } from './actions/actions'
import { connect } from 'react-redux'

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      evaluations: [{ student: "", assignment: "", difficult: "", fun: "" }],
      isLoading: true,
      sortBy: {
        dimension: "assignment",
        direction: "asc"
        //acs or desc, assignment, fun, difficult
      },
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
    console.log(this.props)
    const jsonData = require('./data/data.json');
    ///redux code below
    this.props.dispatch(loadData(jsonData))
    /////
    this.setState({
      evaluations: jsonData.evaluations
    }, this.toggleLoading())
  }

  toggleCategories = (category) => {
    console.log(category)
    this.setState({
      slicers: {
        ...this.state.slicers,
        [category]: !this.state.slicers[category]
      }
    })
    this.props.dispatch(toggleCategory(category))
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
    this.props.dispatch(toggleWeeks(week))
  }

  toggleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    })
    this.props.dispatch(toggleLoading())
  }

  updateSortDirection = (dimension, direction) => {
    this.setState({
      sortBy: {
        dimension: dimension,
        direction: direction
      }
    })
    const newSortObject = {
      dimension: dimension,
      direction: direction
    }
    this.props.dispatch(sortData(newSortObject))
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (this.state.isLoading) {
      return (<h1>Loading...</h1>)
    } else {
      return (
        <Router>
          <Route
            path={["/:StudentEvaluations", "/"]}
            render={(matchProps) => {
              return (
                <div className="maincontainer">
                  <div className="navcontainer">
                    <SortData updateSortDirection={this.updateSortDirection} />

                    <StudentFilter
                      {...this.state}
                      {...matchProps} />
                    <Slicers
                      slicers={this.state.slicers}
                      toggleCategories={this.toggleCategories}
                      toggleWeeks={this.toggleWeeks} />
                  </div>
                  <main>
                    <ChartContainer
                      {...this.state}
                      {...matchProps} />
                  </main>
                </div>
              )
            }} />
        </Router>
      )
    }
  }
}

const mapStateToProps = state => ({


  evaluations: state.evaluations,
  isLoading: state.isLoading,
  dispatch: state.dispatch,
  sortBy: state.sortBy,
  slicers: state.slicers



});

export default connect(mapStateToProps)(Container)
