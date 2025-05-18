'use client'
import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
export const EmployContext = createContext()
import {toast , ToastContainer} from 'react-toastify'
export const EmployContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get(`https://crmworkspace.runasp.net/api/Employee`).then(res => {
            setEmployees(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    const addEmployee = async (file,FullName, Email, PhoneNumber, Address,JobTitle,  DepartmentId) => {
        try {
          const formData = new FormData();
          
          if (file) {
            formData.append('file', file); // optional
          }
      
          formData.append('FullName', FullName?.trim());
          formData.append('Email', Email?.trim());
          formData.append('PhoneNumber', PhoneNumber?.trim());
          formData.append('Address', Address?.trim());
          formData.append('JobTitle', JobTitle?.trim());
          formData.append('DepartmentId', DepartmentId); // ensure this is correct type
      
          for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
          }
      
          const token = localStorage.getItem('token');
      
          const response = await axios.post('https://crmworkspace.runasp.net/api/Employee', formData, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          });
      
          console.log('Success:', response.data);
          window.location.reload();
        } catch (err) {
          if (err.response && err.response.data) {
            console.error('Validation error details:', err.response.data);
          } else {
            console.error('Error:', err);
          }
        }
      };
    return (
        <EmployContext.Provider
            value={{
                employees, addEmployee
            }}>
            {children}
        </EmployContext.Provider>
    )
}

export const useEmploy = () => {
    return useContext(EmployContext)
}