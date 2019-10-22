import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('key')

    return axios.create({
        headers: {
            Authorization: `Token ${token}`
        },
        baseURL: 'https://lambda-mud-test.herokuapp.com'
    })
}

export default axiosWithAuth