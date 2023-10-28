import React from "react"
import { useContext } from 'react'
import { GlobalContext } from '../Context/context'
import {truncateString, convertRupiah, statusConvertion} from '../Utils/utils'
import { useParams } from 'react-router-dom'
import { getJobDetail } from '../Api/apiJob'

export const JobDetail = () => {
    const { state } = useContext(GlobalContext)
    const {
        dataForm, setInput
    } = state 

    // in case user direct to specified ID
    const {id} = useParams()
    if (dataForm.id == 0) {
        getJobDetail(id).then((result)=> {
            setInput(result.data)
        })
    }

    return (
        <>
        <div>
            <div className="min-w-screen min-h-screen bg-green-100 flex items-center p-5 lg:p-10 overflow-hidden relative flex space-x-4">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <img src={dataForm.company_image_url} className="w-full relative z-10" alt="" />
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{dataForm?.title}</h1>
                                <div className="flex flex-col items-start mb-4">
                                    <span className="dark:text-white text-gray-700">
                                        {dataForm.company_name}
                                    </span>
                                    <span className="text-gray-400 font-light text-sm dark:text-gray-300">
                                        {dataForm.company_city}
                                    </span>
                                </div>
                                <p className="text-sm"> {dataForm?.job_description}</p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    {truncateString(dataForm.job_qualification, 80)}
                                </p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    {dataForm.job_type}
                                </p>
                                <p className="mt-2 text-gray-600 text-sm">
                                    {convertRupiah(dataForm.salary_min)} - {convertRupiah(dataForm.salary_max)}
                                </p>
                            </div>

                                <div className ="flex flex-row">
                                    <span className="font-bold text-sm leading-none align-baseline"></span>
                                </div>
                            
                                <div className="flex flex-row space-x-20">
                                    <span className="block mt-10 w-1/3 text-center bg-sky-500 opacity-75 text-white rounded-full px-10 py-2 font-semibold cursor-default">
                                        {dataForm?.job_tenure}
                                    </span>
                                    <span className="block mt-10 w-1/3 text-center bg-green-500 opacity-75 text-white rounded-full px-10 py-2 font-semibold cursor-default">
                                    {statusConvertion(dataForm.job_status)}
                                    </span>
                                </div>
                            </div>
                    </div>
                </div>
                <a href="/" className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Back to homepage</a>
            </div>
            
        </div>
        </>
    )
}
