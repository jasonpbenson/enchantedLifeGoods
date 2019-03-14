import axios from 'axios';

export default function(token){
    var thePromise = axios({
        method: "POST",
        url: `${window.apiHost}/account/getSales`,
        data: {
            token
        }
    });

    return{
        type: "GET_SALES",
        payload: thePromise
    }
}
