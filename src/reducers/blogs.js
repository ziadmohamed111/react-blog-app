const blogReducerDefault = []

export default ( state = blogReducerDefault , action ) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [...state ,action.blog]
            break;
        case "REMOVE_BLOG":
            return state.filter( ( {id} ) => id !== action.id );
            break;
        case "SET_BLOGS":
            return action.blogs
            break;
        case "EDIT_BLOG":
            return state.map( ( expense ) => {
                if ( expense.id === action.id ) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            } );
            break;
    
        default:
            return state;
    }
}