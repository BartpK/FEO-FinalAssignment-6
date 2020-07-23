import React from 'react';
import Slicers from './components/Slicers'
import './App.css';
import ChartContainer from './components/ChartContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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






    if (this.state.isLoading) {
      return (<h1>Loading...</h1>)
    } else {

      return (

        <Router>
          <Route path={["/:StudentEvaluations", "/"]}
            render={(matchProps) => {
              return (
                <div className="maincontainer">
                  <div className="navcontainer">
                    <NavMenu {...this.state} {...matchProps} />
                    <Slicers slicers={this.state.slicers} toggleCategories={this.toggleCategories} toggleWeeks={this.toggleWeeks} />
                  </div>
                  <main>
                    <ChartContainer {...this.state} {...matchProps} />
                  </main>
                </div>
              )
            }} />
        </Router>

      )
    }
  }
}

export default Container;
