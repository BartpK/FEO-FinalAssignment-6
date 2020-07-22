import React from 'react'

const Slicers = (props) => {
    return (
        <div className="slicercontainer">
            <div className="slicer">
                <p>Show which data</p>
                <label><input type="checkbox" checked={props.slicers.showMoeilijk} onChange={() => { props.toggleCategories('showMoeilijk') }} />Show 'Moeilijk'</label><br />
                <label><input type="checkbox" checked={props.slicers.showLeuk} onChange={() => { props.toggleCategories('showLeuk') }} />Show 'Leuk'</label>
            </div >
            <div className="slicer">
                <p>Show which weeks</p>
                <label><input type="checkbox" checked={props.slicers.showWeeks.week1} onChange={() => { props.toggleWeeks("week1") }} />Week 1</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week2} onChange={() => { props.toggleWeeks("week2") }} />Week 2</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week3} onChange={() => { props.toggleWeeks("week3") }} />Week 3</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week4} onChange={() => { props.toggleWeeks("week4") }} />Week 4</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week5} onChange={() => { props.toggleWeeks("week5") }} />Week 5</label><br />
                <label><input type="checkbox" checked={props.slicers.showWeeks.week6} onChange={() => { props.toggleWeeks("week6") }} />Week 6</label><br />

            </div >
        </div>
    )
}

export default Slicers