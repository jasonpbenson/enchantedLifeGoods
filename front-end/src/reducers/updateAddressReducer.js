export default function(state= {}, action){
    switch(action.type){
        case 'UPDATE_ADDRESS':
            return action.payload.data;
        default:
            return state;
    }
}