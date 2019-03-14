export default function(state= [], action){
    switch(action.type){
        case 'GET_SALES':
            return action.payload.data;
        default:
            return state;
    }
}