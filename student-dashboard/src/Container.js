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

  }

  loadData = () => {

    const jsonData = require('./data/data.json');
    ///redux code below
    this.props.dispatch(loadData(jsonData))
    /////
    this.toggleLoading()

  }

  toggleCategories = (category) => {

    this.props.dispatch(toggleCategory(category))
  }

  toggleWeeks = (week) => {
    this.props.dispatch(toggleWeeks(week))
  }

  toggleLoading = () => {
    this.props.dispatch(toggleLoading())
  }

  updateSortDirection = (dimension, direction) => {
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
    if (this.props.isLoading) {
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
                      {...this.props.evaluations}
                      {...matchProps} />
                    <Slicers
                      slicers={this.props.slicers}
                      toggleCategories={this.toggleCategories}
                      toggleWeeks={this.toggleWeeks} />
                  </div>
                  <main>
                    <ChartContainer
                      {...this.props.evaluations}
                      {...this.props.slicers}
                      {...this.props.isLoading}
                      {...this.props.sortBy}
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
