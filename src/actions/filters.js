export const setTextFilter = (text = "") => ({
    type : "SET_TEXT_FILTER",
    text
})

export const sortByNewest = () => ({
    type : "SET_TEXT_NEWEST"
})

export const sortByOldest = () => ({
    type : "SET_TEXT_OLDEST"
})