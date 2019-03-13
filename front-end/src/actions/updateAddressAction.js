import axios from 'axios';

export default function(formData){
    var thePromise = axios({
        method: "POST",
        url: `${window.apiHost}/cart/updateAddress`,
        data: formData
    });

    return{
        type: "UPDATE_ADDRESS",
        payload: thePromise
    }
}