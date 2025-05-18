'use client'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from 'next/image';
import { useAuth } from '../Context/AuthContext';
const Nav = ({showNotifications , setShowNotifications}) => {
  const {user} = useAuth()
  return (
    <div className='w-full flex items-center justify-between py-2 pr-5'>
        <div className='relative'>
            <CiSearch className='absolute top-3 right-3' />
            <input type='text' placeholder='Search' className='bg-white w-full py-2 pl-6 pr-4 rounded-md' />
          </div>
          <div className='flex items-center gap-4'> 
              <IoIosNotificationsOutline onClick={() => setShowNotifications(!showNotifications)} className='text-2xl' />
              <div className='bg-white rounded-lg flex items-center gap-1 p-2'>
                  <Image src={`https://crmworkspace.runasp.net${user?.url}`} width={200} height={200} alt="avatar" className='w-6 h-6 rounded-full' />
                  <span className='text-sm text-black'>{user?.fullName}</span>
              </div>
          </div>
    </div>
  )
}

export default Nav