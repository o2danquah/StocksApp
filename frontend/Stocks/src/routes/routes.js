import React from "react"
import DrugInputs from "../pages/druginput"
import Showdrugs from "../pages/showdrugs"
import Login from "../pages/login"
import UpdateDrugs from "../pages/update"
import WelcomePage from "../pages/welcomepage"

// eslint-disable-next-line
export default [
    {
        path: "/",
        e: <Login/>
    },
    {
        path: "/welcomepage",
        e: <WelcomePage/>
    },
    {
        path: "/druginput",
        e: <DrugInputs/>
    },
    {
        path: "/showdrugs",
        e: <Showdrugs/>
    },
    {
        path: '/update/:id',
        e: <UpdateDrugs/>
    }
   
]