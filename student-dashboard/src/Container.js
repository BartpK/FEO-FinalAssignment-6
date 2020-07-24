import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Slicers from './components/Slicers'
import StudentFilter from "./components/StudentFilter"
import ChartContainer from './components/ChartContainer'
import SortData from './components/SortData'
import './App.css';
import { loadData, sortData, toggleCategory, toggleLoading, toggleWeeks } from './actions/actions'
import { connect } from 'react-redux'

const Container = (props) => {

  useEffect(() => {
    loadDataHandler();
    toggleLoadingHandler();
  }, [])

  const loadDataHandler = () => {
    const jsonData = require('./data/data.json');
    props.dispatch(loadData(jsonData))
  }

  const toggleCategoriesHandler = (category) => {

    props.dispatch(toggleCategory(category))
  }

  const toggleWeeksHandler = (week) => {
    props.dispatch(toggleWeeks(week))
  }

  const toggleLoadingHandler = () => {
    props.dispatch(toggleLoading())
  }

  const SortDirectionHandler = (dimension, direction) => {
    const newSortObject = {
      dimension: dimension,
      direction: direction
    }
    props.dispatch(sortData(newSortObject))
  }

  if (props.isLoading) {
    return (<h1 className="loading">Loading...</h1>)
  } else {
    return (
      <Router>
        <Route
          path={["/:StudentEvaluations", "/"]}
          render={(matchProps) => {
            return (
              <div className="maincontainer">
                <div className="navcontainer">
                  <SortData SortDirectionHandler={SortDirectionHandler} />

                  <StudentFilter
                    {...props.evaluations}
                    {...matchProps} />
                  <Slicers
                    slicers={props.slicers}
                    toggleCategoriesHandler={toggleCategoriesHandler}
                    toggleWeeksHandler={toggleWeeksHandler} />
                </div>
                <main>
                  <ChartContainer
                    {...props.evaluations}
                    {...props.slicers}
                    {...props.isLoading}
                    {...props.sortBy}
                    {...matchProps} />
                </main>
              </div>
            )
          }} />
      </Router>
    )
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
