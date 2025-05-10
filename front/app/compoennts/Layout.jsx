import React from 'react'
import Nav from './Nav'
import Notifications from './NotificationMenu'
import { AuthContextProvider } from '../Context/AuthContext'

const LayoutComponent = ({children}) => {
  return (
    <div>
      {/* <AuthContextProvider> */}
          <Nav />
          <Notifications />
          {children}
      {/* </AuthContextProvider> */}
    </div>
  )
}

export default LayoutComponent