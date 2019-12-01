export default (state = {} ,action) => {
    switch (action.type){
        case "LOGIN" : 
            return {
                uid : action.uuid
            } 
        case "LOGOUT" :
            return {}
        default : 
            return state
    }
}