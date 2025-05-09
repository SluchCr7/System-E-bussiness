'use client'
import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [userToken, setUserToken] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const signUp = () => { }
    const login = (username , password) => { 
        axios.post('http://crmworkspace.runasp.net/api/auth/login' , {username , password}).then(res => {
            // setUser(res.data)
            setUserToken(res.data.token)
            setIsLogin(true)
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
            window.location.href = "/"
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
          setUserToken(token)
          setIsLogin(true)
        }
      }, [])
    // Logout Function
    // const Logout = () => {
    //     swal({
    //         title: "Are you sure?",
    //         text: "You are go to logout from your account !",
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //     })
    //         .then(willLogout => {    
    //             if (willLogout) {
    //                 setLoginState(false)
    //                 setUser({})
    //                 localStorage.removeItem('userData')
    //                 window.location.href = "/Auth/Login"
    //             }
    //         })
    //         .catch(err => toast.error("Logout Failed"))
    // }
    // // Create New User Function
    // const registerNewUser = (Name, Email, Password, e) => {
    //     e.preventDefault()
    //     axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/register` , {Name , Email , Password})
    //         .then(res => {
    //             swal("Good job!", res.data.message, "success");
    //             setTimeout(() => {
    //                 window.location.href = "/Auth/Login"
    //             },2000)
    //         })
    //         .catch((err) => {
    //             swal("Oops!", err.response.data.message, "error");
    //         })
    // }
    return (
        <AuthContext.Provider value={{
            login,
            signUp,
            userToken,
            isLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// export default AuthContextProvider
export const useAuth = () => {
    return useContext(AuthContext)
}