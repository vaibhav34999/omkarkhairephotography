import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Portfolio from "../screens/Portfolio";
import Services from "../screens/Services";
import Contact from "../screens/Contact";

export default function Routes(){

    const ROUTES = [
        {
            path : "",
            element : <Home/>
        },
        {
            path : "about",
            element : <About/>
        },
        {
            path : "portfolio",
            element : <Portfolio/>
        },
        {
            path : "services",
            element : <Services/>
        },
        {
            path : "contact",
            element : <Contact/>
        },
        {
            path : "*",
            element : <Navigate to=""/>
        }
    ]

    let routes = useRoutes(ROUTES)
    return routes;
}