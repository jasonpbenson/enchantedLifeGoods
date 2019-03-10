export default (state = [], action)=> {
    if ((action.type === "AUTH_ACTION") || (action.type === "LOGIN_ACTION")){
        return action.payload.data
        console.log(action.payload.data)
    }else if(action.type === "LOGOUT"){
        return []
    }else{
        return state
    }
}