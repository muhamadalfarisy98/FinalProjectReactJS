import axios from "axios";
import Cookies from "js-cookie"

const baseUrl = `https://dev-example.sanbercloud.com/api`

// getJobsData get job list
export const getJobsData = async () => {
    try {
        const apps = await axios.get(`${baseUrl}/job-vacancy`)
        return apps.data.data
    } catch (error) {
        console.error(error)
    }
}

// getJobDetail - get job
export const getJobDetail = (id) => {
    try {
        return axios.get(`${baseUrl}/job-vacancy/${id}`)
    } catch (error) {
        console.error(error)
    }
}

// deleteJob  - deletes job
export const deleteJob = (ev) => {
    try {
        let idData = parseInt(ev.target.value)
        return axios.delete(`${baseUrl}/job-vacancy/${idData}`,  {headers:{"Authorization" : "Bearer "+ Cookies.get('token')}})
    } catch (error) {
        console.error(error)
    }
}

// createJob - creates Job
export const createJob = (payload) => {
    try {
        return axios.post(`${baseUrl}/job-vacancy`, payload,  {headers:{"Authorization" : "Bearer "+ Cookies.get('token')}})
    } catch (error) {
        console.error(error)
    }
}


// editJobDetail - edit job
export const editJobDetail = (id, payload) => {
    try {
        return axios.put(`${baseUrl}/job-vacancy/${id}`, payload,  {headers:{"Authorization" : "Bearer "+ Cookies.get('token')}})
    } catch (error) {
        console.error(error)
    }
}