export default function(state= [], action){
    switch(action.type){
        case 'UPDATE_CART':
        case 'GET_CART':
        case 'CONFIRM_ORDER':
            console.log(action.payload.data)
            return action.payload.data;
        default:
            return state;
    }
}