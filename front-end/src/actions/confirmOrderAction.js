import axios from 'axios'

export default (token)=> {
    const updateCartPromise = axios({
        method: "POST",
        url: `${window.apiHost}/cart/confirmOrder`,
        data: {
            token
        }
    })
    return{
        type: "CONFIRM_ORDER",
        payload: updateCartPromise
    }
}   