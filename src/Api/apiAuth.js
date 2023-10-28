import axios from "axios";
import Cookies from "js-cookie"

const baseUrl = `https://dev-example.sanbercloud.com/api`

// authRegister - enrollment
export const authRegister = (payload) => {
    try {
        return axios.post(`${baseUrl}/register`, payload)
    } catch (error) {
        console.error(error)
    }
}

// authLogin - login
export const authLogin = (payload) => {
    try {
        return axios.post(`${baseUrl}/login`, payload)
    } catch (error) {
        console.error(error)
    }
}

// authChangePassword - change password
export const authChangePassword = (payload) => {
    try {
        return axios.post(`${baseUrl}/change-password`,  
        payload,
        {headers:{"Authorization" : "Bearer "+ Cookies.get('token')}})
    } catch (error) {
        console.error(error)
    }
}