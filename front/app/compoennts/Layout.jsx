import React from 'react'
import Nav from './Nav'
import Notifications from './NotificationMenu'

const LayoutComponent = ({children}) => {
  return (
    <div>
        <Nav />
        <Notifications />
        {children}
    </div>
  )
}

export default LayoutComponent