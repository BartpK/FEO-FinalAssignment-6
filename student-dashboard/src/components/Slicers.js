import React from 'react'

const Slicers = (props) => {
    console.log(props)
    return (
        <div>
            <p>Show which data</p>

            <label><input type="checkbox" checked={props.slicers.showMoeilijk} onChange={() => { props.toggleCategories('showMoeilijk') }} />Show 'Moeilijk'</label><br />
            <label><input type="checkbox" checked={props.slicers.showLeuk} onChange={() => { props.toggleCategories('showLeuk') }} />Show 'Leuk'</label>
        </div >
    )
}

export default Slicers