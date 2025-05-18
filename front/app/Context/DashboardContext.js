'use client';
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

export const DashboardContext = createContext()


export const DashboardContextProvider = ({ children }) => {
    const [projects , setProjects] = useState([])
    const [employeesDash, setEmployeesDash] = useState([])
    const [events , setEvents] = useState([])
    const {token} = useAuth()
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://crmworkspace.runasp.net/api/DashBoard' , {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                setProjects(res.data.projects);
                setEmployeesDash(res.data.employees);
                setEvents(res.data.events);
            }).catch((err) => {
                console.log(err);
            })
        }
        fetchData()
    }, [])

    return (
        <DashboardContext.Provider
            value={{
                projects,
                employeesDash,
                events
            }}
        >
            {children}
        </DashboardContext.Provider>
    )
}


export const useDashboard = () => {
    return useContext(DashboardContext)
}