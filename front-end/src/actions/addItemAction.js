import axios from 'axios';

export default (formData)=> {
    const axiosPromise = axios({
        url: `${window.apiHost}/admin`,
        method: 'POST',
        data: formData
    })
    return{
        type: "ADD_ITEM_ACTION",
        payload: axiosPromise
    }
}