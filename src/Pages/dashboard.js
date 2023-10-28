import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"
import React from "react"
import { useContext } from 'react'
import { GlobalContext } from '../Context/context'
import { useEffect } from 'react'
import {truncateString, convertRupiah, statusConvertion} from '../Utils/utils'
import { FilterByStatus,FilterByMinSalary,FilterByCity } from '../Home/home';

export const Dashboard = () => {
    let navigate = useNavigate()
    return (
        <>
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="/dist/tailwind.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" />
                <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onclick="openSidebar()">
                    <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md" />
                </span>
                <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
                    <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
                        <h1 className="font-bold text-gray-200 text-[15px] ml-3">Dashboard Menu</h1>
                        <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onclick="openSidebar()" />
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]" />
                    </div>

                    {/* section Home */}
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        onClick={() => {
                            navigate('/')
                        }}
                    >
                    <i className="bi bi-house-door-fill" />
                    <span className="text-[15px] ml-4 text-gray-200 font-bold" >Home</span>
                    </div>

                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                    onClick={() => {
                        navigate('/dashboard')
                    }}
                    >
                    <i className="bi bi-bar-chart-fill" />
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Summary</span>
                    </div>
                    
                    
                    {/* MANAGE JOBS DATA */}
                    <div className="my-4 bg-gray-600 h-[1px]" />
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onclick="dropdown()">
                    <i className="bi bi-activity" />
                    <div className="flex justify-between w-full items-center">
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Manage Data</span>
                        <span className="text-sm rotate-180" id="arrow">
                        <i className="bi bi-chevron-down" />
                        </span>
                    </div>
                    </div>
                    <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
                    <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
                    onClick={() => {
                        navigate('/dashboard/list-job-vacancy')
                    }}>
                        List Data
                    </h1>
                    <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
                    onClick={() => {
                        navigate('/dashboard/list-job-vacancy/create')
                    }}
                    >
                        Add Data
                    </h1>
                    </div>


                    {/* PROFILE */}
                    <div className="my-4 bg-gray-600 h-[1px]" />
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onclick="dropdown()">
                    <i className="bi bi-person-fill" />
                    <div className="flex justify-between w-full items-center">
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Profile</span>
                        <span className="text-sm rotate-180" id="arrow">
                        <i className="bi bi-chevron-down" />
                        </span>
                    </div>
                    </div>
                    <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
       
                    <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
                     onClick={() => {
                        navigate('/dashboard/change-password')
                    }}>
                        Change Password
                    </h1>
                    </div>

                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <i className="bi bi-box-arrow-in-right" />
                        <span className="text-[15px] ml-4 text-gray-200 font-bold"
                        onClick={() => {
                            Cookies.remove('token')
                            navigate('/login')
                        }}
                        >Logout</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export const DashboardSummary = () => {
    const { state, handler } = useContext(GlobalContext)
    const {
        jobs
    } = state 

    const {
      handleFetch,
    } = handler

    useEffect( () => {
        handleFetch()
    }, [])  

    let openVacan = []
    for (let index = 0; index < jobs.length; index++) {
        const element = jobs[index];
        if (element.job_status === 1) {
            openVacan.push(element)
        }
    }

    let closedVacan = jobs?.length - openVacan?.length

    return (
        <>
            <section className="max-w-screen-xl bg-green-300 dark:bg-gray-800 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
                    Get your dream job here!
                    </h2>
                </div>
                <div className="mt-10 text-center justify-center">
                    <div className="mt-10 sm:mt-0">
                    <div className='flex flex-x-2 justify-center mt-10 sm:mt-0'>
                        

                    </div>

                    <div>
                        <p className="text-8xl font-extrabold leading-none text-white">
                            {openVacan?.length}
                        </p>
                        <p className="mt-2 text-base font-medium leading-6 text-blue">
                            Total Open Vacancy
                        </p>
                    </div>
                    

                    <p className="text-8xl font-extrabold leading-none text-white">
                        {closedVacan}
                    </p>
                    <p className="mt-2 text-base font-medium leading-6 text-red">
                        Total Closed Vacancy
                    </p>

                    </div>
                </div>
            </section>
            <div className='justify-center'>

            </div>
            
        </>
    )
}

// cek data (edit & delete)
export const DashboardListData = () => {
    const { state, handler } = useContext(GlobalContext)
    const {
        jobs,
        fetchStatus,
        inputSearch
    } = state 

    const {
      handleFetch,
      HandelDeleteJob,
      handleEdit,
      handleSearch,
      handleChangeSearch,
    } = handler

    useEffect( () => {
        if (fetchStatus === true) {
            handleFetch()
        }
    }, [fetchStatus, handleFetch])  

    const JobList = () => {
        return (
          <div className="mt-10 ml-80 mr-10 mb-30">
               <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-white-700 uppercase bg-purple-400 dark:bg-purple-700 text-white-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    NO
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Desc
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Req
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Tenure
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company Image Url
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company City
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Salary Min
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Salary Max
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              jobs?.map((user, idx) => {
                                return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={idx}>
                                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{idx+1}</td>
                                  <td>{user.title}</td>
                                  <td>{truncateString(user.job_description, 30) }</td>
                                  <td>{truncateString(user.job_qualification, 30)}</td>
                                  <td>{user.job_type}</td>
                                  <td>{user.job_tenure}</td>
                                  <td >{statusConvertion(user.job_status)}</td>
                                  <td>{user.company_name}</td>
                                  <td>{user.company_image_url}</td>
                                  <td>{user.company_city}</td>
                                  <td>{convertRupiah(user.salary_min)}</td>
                                  <td>{convertRupiah(user.salary_max)}</td>
                                  <td className="flex space-x-4">
                                  {
                                      <button value={user.id} 
                                      onClick={handleEdit}
                                      className="bg-yellow-300 
                                        hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-yellow-700 rounded mt-2">
                                      Edit
                                      </button>
                                    }

                                    {
                                      <button 
                                        onClick={HandelDeleteJob} 
                                        value={user.id} 
                                        className="bg-red-300 hover:bg-red-700 
                                        text-white font-bold py-2 px-4 border border-red-700 rounded mt-2">
                                        Delete
                                      </button>
                                    }
                                  </td>
                                  
                                </tr>
                              })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <>
            <form className="mt-10 ml-80 mr-10"
                onSubmit={handleSearch}
            >   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" 
                        iewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    </div>

                    <input type="search" id="default-search" 
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search job title" 
                    name="title"
                    onChange={handleChangeSearch} 
                    value={inputSearch.title}
                    />

                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
                        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <br></br>
            <div className="flex flex-x-2 justify-center">
                <FilterByStatus/>
                <FilterByCity/>
                <FilterByMinSalary/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <JobList/>

            
        </>
    )
}

// add data
export const DashboardAddData = () => {
    const { state, handler } = useContext(GlobalContext)
    const {
        dataForm
    } = state 

    const {
      handleInput,
      handleSubmit
    } = handler


    return (
        <>
            <div id="main_add" className='ml-80 mt-10 mr-40'>
                <h1><b>Add New Data Here!</b></h1>
                    <div>
                <form className="" onSubmit={handleSubmit}  >
                    <br></br>
                    <br></br>
                    <div id="data-gambar">
                        <p className='border-b-2'>Url Gambar company</p>
                        <br/>
                        <br/>
                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                <b>Company Image URL</b></label>
                            <input type="text" id="small-input"
                                name='company_image_url'
                                onChange={handleInput} 
                                value={dataForm.company_image_url}
                                placeholder='masukkan image company url..'
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>
                    </div>
                    
                    
                    <div id="data-game">
                        <p className='border-b-2'> Data Job</p>
                        <br></br>
                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Title</b>
                                </label>
                            <input type="text" id="small-input"
                                required
                                name='title'
                                onChange={handleInput} 
                                value={dataForm.title}
                                placeholder='masukkan title pekerjaan..'
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>

                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Job Desc</b>
                                </label>
                            <input type="text"
                                required
                                name='job_description'
                                onChange={handleInput} 
                                value={dataForm.job_description}
                                placeholder='masukkan job desc..'
                                id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>


                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Job Req</b>
                                </label>
                            <input type="text" id="small-input" 
                                required
                                name='job_qualification'
                                onChange={handleInput} 
                                value={dataForm.job_qualification}
                                placeholder='masukkan job req..'
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>

                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Job Type</b>
                                </label>
                            <input type="text" 
                                required
                                name='job_type'
                                onChange={handleInput} 
                                value={dataForm.job_type}
                                placeholder='masukkan job tipe..'
                                id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>

                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Job Tenure</b>
                                </label>
                            <input type="text" 
                                required
                                name='job_tenure'
                                onChange={handleInput} 
                                value={dataForm.job_tenure}
                                placeholder='masukkan job tenure..'
                            id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>

                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Status</b>
                                </label>
                            <input type="number"
                                required
                                onChange={handleInput} 
                                value={dataForm.job_status}
                                name='job_status'
                                min="0"
                                max={1}
                                placeholder='masukkan status job..'
                                id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>

                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Company Name</b>
                                </label>
                            <input type="text" 
                                required
                                name='company_name'
                                onChange={handleInput} 
                                value={dataForm.company_name}
                                placeholder='masukkan company name..'
                                id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>

                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Company City</b>
                                </label>
                            <input type="text" 
                                required
                                name='company_city'
                                onChange={handleInput} 
                                value={dataForm.company_city}
                                placeholder='masukkan company city..'
                                id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>
                    </div>

                    <div id="device-type">
                        <p className='border-b-2'>Salary</p>
                        <br/>
                        <br/>
                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Salary Min</b>
                                </label>
                            <input type="number"
                                onChange={ handleInput} 
                                value={dataForm.salary_min}
                                required
                                name='salary_min'
                                min="0"
                                id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>

                        <div>
                            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Salary Max</b>
                                </label>
                            <input type="number" 
                                onChange={handleInput} 
                                value={dataForm.salary_max}
                                required
                                name='salary_max'
                                min="0"
                                id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <br/>
                    </div>
                    
                    {/* button  */}
                    <div className="flex items-center justify-between">
                        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type={'submit'}>
                            Submit
                        </button>
                    </div>

                    <br/>
                    </form>
                </div>


            </div>
        </>
    )
}