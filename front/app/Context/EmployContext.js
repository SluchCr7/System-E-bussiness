'use client'
import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
export const EmployContext = createContext()

export const EmployContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get(`https://crmworkspace.runasp.net/api/Employee`).then(res => {
            setEmployees(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, [employees]);
    return (
        <EmployContext.Provider
            value={{
                employees
            }}>
            {children}
        </EmployContext.Provider>
    )
}

export const useEmploy = () => {
    return useContext(EmployContext)
}