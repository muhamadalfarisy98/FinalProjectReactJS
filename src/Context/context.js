import { createContext, useState } from "react";
import {getJobsData, getJobDetail, deleteJob, createJob, editJobDetail} from '../Api/apiJob'
import {authLogin, authRegister, authChangePassword} from '../Api/apiAuth'
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'

export const GlobalContext = createContext()

export const GlobalProvider = (props)=>{
    let navigate = useNavigate()

    // state
    const [jobs, setJobs] = useState([])
    const [fetchStatus, setFetchStatus] = useState(true)
    const [dataForm, setInput] = useState(
        {
            id: 0,
            title : "",
            job_description : "",
            job_qualification : "",
            job_type : "",
            job_tenure: "",
            job_status : 0,
            company_name : "",
            company_image_url : "",
            company_city: "",
            salary_min : 0,
            salary_max: 0,
       }
    )
    
    // search
    const [inputSearch, setInputSearch] = useState({
        title : ""
    })

    const handleChangeSearch = (event) => {
        let value = event.target.value
        let name = event.target.name
        setInputSearch({...inputSearch, [name] : value})
    }

    const handleSearch = (event) => {
        event.preventDefault()
        if (inputSearch.title.length > 0 ) {
            getJobsData().then((result)=> {
                let arrItem = []
                for (let index = 0; index < result.length; index++) {
                    const element = result[index]
                    if (element.title.toLowerCase() === inputSearch.title.toLowerCase()) {
                        arrItem.push(element)
                    }
                }
                setJobs(arrItem)
            })
            setFetchStatus(false)  
            return  
        }
        handleFetch()
    }

    // filter by categories 
    const handleCategoryStatus = (event) => {
        event.preventDefault()
        let value = event.target.value
        getJobsData().then((result)=> {
            // if all
            if (value === 2) {
                setJobs(result)
                return
            }

            let arrItem = []
            for (let index = 0; index < result.length; index++) {
                const element = result[index]
                if (element.job_status === value) {
                    arrItem.push(element)
                }
            }
            setJobs(arrItem)
        })
        setFetchStatus(false)  
    }


    let cities = {
        1 : "Jakarta",
        2 : "Palembang",
        3 : "California",
        4 : "Washington",
        10 : "All"
    }
    const handleCategoryCity = (event) => {
        event.preventDefault()
        let value = event.target.value
        getJobsData().then((result)=> {
            if (cities[value].toLowerCase() === "all") {
                setJobs(result)
                return
            }

            let arrItem = []
            for (let index = 0; index < result.length; index++) {
                const element = result[index]
                if (element.company_city.toLowerCase() === cities[value].toLowerCase()) {
                    arrItem.push(element)
                }
            }
            setJobs(arrItem)
        })
        setFetchStatus(false)  
    }

    let minSalary = {
        0 : 1000000,
        1 : 4000000,
        2 : 7000000,
        3 : "All",
    }

    const handleCategoryMinsalary = (event) => {
        event.preventDefault()
        let value = event.target.value
        getJobsData().then((result)=> {
            if (minSalary[value] === "All") {
                setJobs(result)
                return
            }

            let arrItem = []
            for (let index = 0; index < result.length; index++) {
                const element = result[index]
                if (element.salary_min >= minSalary[value]) {
                    arrItem.push(element)
                }
            }
            setJobs(arrItem)
        })
        setFetchStatus(false)  
    }
    

    // login
    const [inputLogin, setInputLogin] = useState({
        email : "",
        password : ""
    })

    const handleChangeLogin = (event) => {
        let value = event.target.value
        let name = event.target.name
        setInputLogin({...inputLogin, [name] : value})
    }

    const handleLogin = (event) => {
        event.preventDefault()
        authLogin(inputLogin).then((res) => {
            let {token} = res.data
            Cookies.set('token', token, {expires : 1})
            alert("Successfully logged in")
            navigate('/')
        })
        .catch((error) => {
            alert(error.code + ": Email or password might be wrong!")
        })
    }

    // register
    const [inputRegister, setInputRegister] = useState({
        name : "",
        image_url : "",
        email : "",
        password : ""
    })

    const handleChangeRegister = (event) => {
        let value = event.target.value
        let name = event.target.name
        setInputRegister({...inputRegister, [name] : value})
    }

    const handleRegister = (event) => {
        event.preventDefault()
        authRegister(inputRegister).then((res) => {
            alert("Successfully registered")
            navigate('/login')
        })
        .catch((error) => {
            alert(error.response?.data)
        })
    }

    // password
    const [inputPassword, setInputPassword] = useState({
        current_password : "",
        new_password : "",
        new_confirm_password : ""
    })

    const handleChangePassword = (event) => {
        let value = event.target.value
        let name = event.target.name
        setInputPassword({...inputPassword, [name] : value})
    }

    const handlePassword = (event) => {
        event.preventDefault()
        if (Cookies.get('token') == undefined) {
            alert("Please login first")
            navigate('/login')
            return 
        }
        authChangePassword(inputPassword).then((res) => {
            if (res.status == 200) {
                alert("Successfully change password")
                Cookies.remove('token')
                navigate('/login')
            }
        })
        .catch((error) => {
            alert(error.code + ": Data password lama atau baru tidak tepat")
        })
    }

    // indikator
    const [currentId, setCurrentId] = useState(-1)

    let state = {
        jobs, setJobs,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        dataForm, setInput,

        inputLogin, setInputLogin,
        inputRegister, setInputRegister,

        inputSearch, setInputSearch,

        inputPassword, setInputPassword,

        // inputCategoryStatus, setCategoryStatus
    }

    
    //  Job data
    const HandelDeleteJob = (ev) => {
        deleteJob(ev).then((res)=>{
            if (res.status === 200) {
                setFetchStatus(true)
            }
        })
      }
    
    const handleFetch = () => {
        getJobsData().then((result)=> {
            setJobs(result)
        })
        setFetchStatus(false)
    }

    const handleJobDetail = (ev) => {
        let idData = parseInt(ev.target.value)
        getJobDetail(idData).then((result)=> {
            setInput(result.data)
            navigate(`/job-vacancy/${idData}`)
        })
    }

    const handleEdit = (ev) => {
        let idData = parseInt(ev.target.value)
        navigate(`/dashboard/list-job-vacancy/edit/${idData}`)
        getJobDetail(idData).then((res) =>{
            setInput(res.data)
        })
        setCurrentId(idData)
    }

    const handleInput =  (ev) => {
        setInput((prev) => {
            let helper = {...prev}
            helper[ev.target.name] = ev.target.value
            return helper;
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
  
        if (currentId === -1) {
            createJob(dataForm).then((res) => {
                if (res.status === 201) {
                    alert("Berhasil menambahkan data")
                    setFetchStatus(true)
                }
            })
        } 
        else {
            editJobDetail(currentId, 
                dataForm
            ).then((res) => {
                if (res.status === 200) {
                    alert("Berhasil mengedit data")
                    setFetchStatus(true)
                    navigate('/dashboard/list-job-vacancy')
                }
            })
        }
        
        // reset
        setCurrentId(-1)
        setInput(
            {
                id: 0,
                title : "",
                job_description : "",
                job_qualification : "",
                job_type : "",
                job_tenure: "",
                job_status : 0,
                company_name : "",
                company_image_url : "",
                company_city: "",
                salary_min : 0,
                salary_max: 0,
            }
        )
    }

    let handler = {
        handleEdit,
        handleInput,
        handleSubmit,
        HandelDeleteJob,
        handleFetch,

        handleLogin,
        handleChangeLogin,

        handleChangeRegister,
        handleRegister,

        handleSearch,
        handleChangeSearch,
        handleJobDetail,

        handleChangePassword,
        handlePassword,

        handleCategoryCity,
        handleCategoryStatus,
        handleCategoryMinsalary,
    }

    return (
        <GlobalContext.Provider value = {{
                state,
                handler
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}