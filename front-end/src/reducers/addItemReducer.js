export default (state = [], action)=> {
    if ((action.type === "ADD_ITEM_ACTION")){
        return action.payload.data
    }else{
        return state
    }
}