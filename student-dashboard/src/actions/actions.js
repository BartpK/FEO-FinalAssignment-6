export const loadData = (payload) => {
    return {
        type: 'LOAD_DATA',
        payload
    }
}

export const sortData = (payload) => {
    return {
        type: 'SORT_DATA',
        payload
    }
}

export const toggleCategory = (payload) => {

    return {
        type: 'TOGGLE_CATEGORY',
        payload
    }
}

export const toggleLoading = () => {
    return {
        type: 'TOGGLE_LOADING'
    }
}

export const toggleWeeks = (payload) => {
    console.log(payload)
    return {
        type: 'TOGGLE_WEEKS',
        payload
    }
}

