import React from 'react'

const SortData = (props) => {

    const changeHandler = (e) => {
        switch (e.target.value) {
            case "assasc":
                props.updateSortDirection('assignment', 'asc')
                break;
            case "assdsc":
                props.updateSortDirection('assignment', 'dsc')
                break;
            case "diffasc":
                props.updateSortDirection('difficult', 'asc')
                break;
            case "diffdsc":
                props.updateSortDirection('difficult', 'dsc')
                break;
            case "funasc":
                props.updateSortDirection('fun', 'asc')
                break;
            case "fundsc":
                props.updateSortDirection('fun', 'dsc')
                break;
        }
    }

    return (
        <div className="slicercontainer">
            <h2>Sort by...</h2>
            <select name="sort" defaultValue="Assignments a-z" onChange={changeHandler}>
                <option value="assasc">Assignments a-z</option>
                <option value="assdsc">Assignments z-a</option>
                <option value="diffasc">Difficult low-high</option>
                <option value="diffdsc">Difficult high-low</option>
                <option value="funasc">Fun low-high</option>
                <option value="fundsc">Fun high-low</option>

            </select>
        </div>
    )
}

export default SortData