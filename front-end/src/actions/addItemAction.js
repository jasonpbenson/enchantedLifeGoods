import axios from 'axios';

export default (formData)=> {
    console.log(formData)
    let newFormData = new FormData()
    newFormData.append("title", formData.title)
    newFormData.append("description", formData.description)
    newFormData.append("price", formData.price)
    newFormData.append("image", formData.image)
    const axiosPromise = axios({
        url: `${window.apiHost}/admin`,
        method: 'POST',
        data: newFormData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    return{
        type: "ADD_ITEM_ACTION",
        payload: axiosPromise
    }
}