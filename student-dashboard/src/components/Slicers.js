import React from 'react'

const Slicers = (props) => {
    return (
        <div className="slicercontainer">
            <div className="slicer">
                <h2>Filter by category</h2>
                <label><input type="checkbox" checked={props.slicers.showDifficult} onChange={() => { props.toggleCategoriesHandler('showDifficult') }} />Show 'Difficult'</label><br />
                <label><input type="checkbox" checked={props.slicers.showFun} onChange={() => { props.toggleCategoriesHandler('showFun') }} />Show 'Fun'</label>
            </div >
            <div className="slicer">
                <h2>Filter by week</h2>
                <label><input type="checkbox" checked={props.slicers.showWeeks.week1} onChange={() => { props.toggleWeeksHandler("week1") }} />Week 1</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week2} onChange={() => { props.toggleWeeksHandler("week2") }} />Week 2</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week3} onChange={() => { props.toggleWeeksHandler("week3") }} />Week 3</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week4} onChange={() => { props.toggleWeeksHandler("week4") }} />Week 4</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week5} onChange={() => { props.toggleWeeksHandler("week5") }} />Week 5</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week6} onChange={() => { props.toggleWeeksHandler("week6") }} />Week 6</label><br />
            </div >
        </div>
    )
}

export default Slicers