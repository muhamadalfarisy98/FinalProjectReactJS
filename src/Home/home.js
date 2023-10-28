import React from "react"
import { useContext } from 'react'
import { GlobalContext } from '../Context/context'
import { useEffect } from 'react'
import {truncateString, convertRupiah, statusConvertion} from '../Utils/utils'
import { SearchBar } from './searchBar';

export const FilterByStatus = () => {
    const { handler } = useContext(GlobalContext)
    const {
        handleCategoryStatus,
    } = handler

    return (
        <>
            <div className="ml-20">
                <div className="group inline-block">
                    <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                        <span className="pr-1 font-semibold flex-1">Filter By Status</span>
                        <span>
                            <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180
                    transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </span>
                    </button>

                    <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                        transition duration-150 ease-in-out origin-top min-w-32">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={1}
                    onClick={handleCategoryStatus}
                    >Open</li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={0}
                    onClick={handleCategoryStatus}
                    >Closed</li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={2}
                    onClick={handleCategoryStatus}
                    >All</li>
                    </ul>
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n" }} />
            </div>
        </>
    )
}

export const FilterByMinSalary = () => {
    const { handler } = useContext(GlobalContext)
    const {
        handleCategoryMinsalary,
    } = handler

    return (
        <>
            <div className="ml-20">
                <div className="group inline-block">
                    <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                        <span className="pr-1 font-semibold flex-1">Filter By Min Salary</span>
                        <span>
                            <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180
                    transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </span>
                    </button>

                    <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                        transition duration-150 ease-in-out origin-top min-w-32">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={0}
                    onClick={handleCategoryMinsalary}
                    >lebih dari {convertRupiah(1000000)}</li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={1}
                    onClick={handleCategoryMinsalary}
                    >lebih dari {convertRupiah(4000000)}</li>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={2}
                    onClick={handleCategoryMinsalary}
                    >lebih dari {convertRupiah(7000000)}</li>

                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={3}
                    onClick={handleCategoryMinsalary}
                    >All</li>
                    </ul>
                    
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n" }} />
            </div>
        </>
    )
}

export const FilterByCity = () => {
    const { handler } = useContext(GlobalContext)
    const {
        handleCategoryCity,
    } = handler

    return (
        <>
            <div className="ml-20">
                <div className="group inline-block">
                    <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                        <span className="pr-1 font-semibold flex-1">Filter By City</span>
                        <span>
                            <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180
                    transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </span>
                    </button>

                    <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                        transition duration-150 ease-in-out origin-top min-w-32">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={1}
                    onClick={handleCategoryCity}
                    >Jakarta</li>

                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={2}
                    onClick={handleCategoryCity}
                    >Palembang</li>

                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={3}
                    onClick={handleCategoryCity}
                    >California</li>

                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={4}
                    onClick={handleCategoryCity}
                    >Washington</li>

                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100"
                    value={10}
                    onClick={handleCategoryCity}
                    >All</li>
                    </ul>
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n" }} />
            </div>
        </>
    )
}

export const Home = () => {
    const { state, handler } = useContext(GlobalContext)
    const {
        jobs
    } = state 

    const {
      handleFetch,
      handleJobDetail,
    } = handler

    useEffect( () => {
        handleFetch()
    }, [])  

    const JobList = () => {
        return jobs?.map((data,idx) => (
            <>
                <div className="
                    mt-10 h-144 flex 
                    max-w-xl bg-white shadow-lg rounded-lg overflow-hidden ontent-start">
                    <img src={data.company_image_url} alt=""
                        className="w-1/2 bg-cover bg-center bg-landscape" />
                    <div className="w-1/2 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">
                            {data.company_city}
                        </h1>

                        <small>{data.company_name}</small>

                        <p className="mt-2 text-gray-600 text-sm">
                           Title : {data.title}
                        </p>

                        <p className="mt-2 text-gray-600 text-sm">
                           Desc : {truncateString(data.job_description, 30)}
                        </p>

                        <p className="mt-2 text-gray-600 text-sm">
                            Req :   {truncateString(data.job_qualification, 20)}
                        </p>

                        {/* job status */}
                        <p className="mt-2 text-gray-600 text-sm">
                           Status : {statusConvertion(data.job_status)}
                        </p>

                        <p className="mt-2 text-gray-600 text-sm">
                            Job Status : {data.job_tenure}
                        </p>

                        <p className="mt-2 text-gray-600 text-sm">
                           Job Type : {data.job_type}
                        </p>

                        <p className="mt-2 text-gray-600 text-sm">
                           Salary : {convertRupiah(data.salary_min)} - {convertRupiah(data.salary_max)}
                        </p>
                        <br></br>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                            focus:outline-none focus:shadow-outline shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500"
                            value={data.id}
                            onClick={handleJobDetail}
                        >Get Detail</button>
                    </div>
                </div>
            </>
        ))
    }

    const JumbotronSection = () => {
        return (
            <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Save your time finding your dream jobs</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        We know that looking place to work right now is hard, so in order to accomodate it we expose a platform to be able provide you the information about current available job list</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#content" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="/login" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>  
                    </div>
                </div>
                </section>
        )
    }

    


    return(
        <>
        <section className="bg-gray-200 p-5">
            <JumbotronSection/>
            <div className="container mx-auto mt-10">
                <h1 id="content" className="text-xl font-bold ">Find your dream job!</h1>
            </div>
            <br></br>

            {/* fitur search */}
            <SearchBar/>
            <br></br>
            <div className="flex flex-x-2 justify-center">
                <FilterByStatus/>
                <FilterByCity/>
                <FilterByMinSalary/>
            </div>

            <div className="container mx-auto flex-wrap flex gap-20 items-center justify-start">
                <JobList/>
            </div>
        </section>
        </>
    )
}