import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import addItemReducer from './addItemReducer';
import updateAddressReducer from './updateAddressReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer, 
    address: updateAddressReducer
})

export default rootReducer;