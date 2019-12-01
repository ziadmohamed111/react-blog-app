const filterReducersDefault = {
    text : "",
    sortBy : "newest"
}

export default (state = filterReducersDefault , action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text : action.text
            }
        case "SET_TEXT_NEWEST":
            return {
                ...state,
                sortBy : "newest"
            }
        case "SET_TEXT_OLDEST":
            return {
                ...state,
                sortBy : "oldest"
            }
    
        default:
            return state
    }
}


