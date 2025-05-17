'use client'
import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
export const AuthContext = createContext()
import { toast } from "react-toastify"
import swal from "sweetalert"
export const AuthContextProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [userToken, setUserToken] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
const login = async (username, password) => {
        try {
          // Step 1: Login
          const loginRes = await axios.post(
            'https://crmworkspace.runasp.net/api/auth/login',
            { username, password }
          );
      
          const token = loginRes.data.token;
          setUserToken(token);
          setIsLogin(true);
          localStorage.setItem('token', token);
      
          // Step 2: Fetch user info using token
          const userRes = await axios.get(
            'https://crmworkspace.runasp.net/api/Employee/GetByUser',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
      
          setUser(userRes.data);
          localStorage.setItem('User', JSON.stringify(userRes.data));
      
          console.log(userRes.data);
      
          // Step 3: Redirect
          window.location.href = '/';
        } catch (err) {
          console.error('Login error:', err);
        }
    };
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
          setUserToken(token)
          setIsLogin(true)
        }
    }, [])
    // Logout Function
    const Logout = () => {
        swal({
            title: "Are you sure?",
            text: "You are go to logout from your account !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(willLogout => {
                if (willLogout) {
                    setIsLogin(false)
                    setUserToken(null)
                    localStorage.removeItem('token')
                    window.location.href = "/Pages/Login"
                }
            })
            .catch(err => toast.error("Logout Failed"))
    }
    // useEffect(() => {
    //     fetch("http://crmworkspace.runasp.net/api/Employee/GetByUser", {
    //         method: "GET",
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`, // استخدام التوكن من  المحلي
    //             "Content-Type": "application/json"
    //         }
    //         }).then((res) => {
    //             setUser(res.data)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }, []);
    useEffect(() => {
        const user = localStorage.getItem('User')
        if (user) {
            setUser(JSON.parse(user))
        }
    }, [user])
    return (
        <AuthContext.Provider value={{
            login,
            userToken,
            isLogin,
            user,
            Logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// export default AuthContextProvider
export const useAuth = () => {
    return useContext(AuthContext)
}