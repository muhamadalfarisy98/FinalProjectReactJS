import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate()
    return(
    <>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Job Listing</span>
                </a>

                <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/"className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Home</Link>
                        </li>

                        {/* login & logout */}
                        {
                            !Cookies.get('token') && <li><Link to={'/login'}
                            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Login</Link></li>
                        }

                        {Cookies.get('token') && <li><span onClick={() => {
                            Cookies.remove('token')
                            navigate('/login')
                        }}

                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 
                            dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >Logout</span></li>}

                        {/* Dashboard */}
                        {Cookies.get('token') && <li><span 
                            onClick={() => {
                                navigate('/dashboard')
                            }}
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent 
                            md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 
                            dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >Dashboard</span></li>}


                    </ul>
                </div>


            </div>
        </nav>
    </>
    )
    
}

export default Navbar