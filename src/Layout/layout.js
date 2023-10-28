import React from "react"
import Navbar from "../Navbar/navbar"
import {Dashboard} from "../Pages/dashboard"
import {Footer} from "../Footer/footer"


export const Layout = (props) => {
    return(
        <>
            <Navbar />
            {props.children}
            <Footer/>
        </>
    )
}

export const LayoutDashboard = (props) => {
    return(
        <>
            <Dashboard />
            {props.children}
            <Footer/>
        </>
    )
}

export const Layout404 = (props) => {
    return(
        <>
            {props.children}
            <Footer/>
        </>
    )
}