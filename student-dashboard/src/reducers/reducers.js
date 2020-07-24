const defaultState = {

    evaluations: [{ student: "", assignment: "", difficult: "", fun: "" }],
    isLoading: true,
    sortBy: {
        dimension: "assignment",
        direction: "asc"
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

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_DATA":
            return {
                ...state,
                evaluations: action.payload
            }
        case "SORT_DATA":
            return {
                ...state,
                sortBy: action.payload
            }
        case "TOGGLE_CATEGORY":
            return {
                ...state,
                slicers: {
                    ...state.slicers,
                    [action.payload]: !state.slicers[action.payload]
                }
            }
        case "TOGGLE_LOADING":
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case "TOGGLE_WEEKS":
            return {
                ...state,
                slicers: {
                    ...state.slicers,
                    showWeeks: {
                        ...state.slicers.showWeeks,
                        [action.payload]: !state.slicers.showWeeks[action.payload]
                    }
                }
            }
        default: return state
    }
}

export default reducer