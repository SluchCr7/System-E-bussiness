'use client'
import Image from "next/image";
import AddEventModal from "./compoennts/AddEvent";
import Aside from "./compoennts/Aside";
import Nav from "./compoennts/Nav";
import {useContext, useState} from "react"
import Dashboard from "./compoennts/Dashboard";
import Calender from './compoennts/Calender'
import Profile from "./compoennts/Profile";
import EmployeeList from './compoennts/Employees'
import  VacationDashboard from './compoennts/Vacation'
import Notifications from "./compoennts/NotificationMenu";
import ProjectsDashboard from "./compoennts/Projects";
import HomePage from "./compoennts/HomePage";
import { AuthContext } from "./Context/AuthContext";
export default function Home() {
  const [active, setActive] = useState('Dashboard');
  const [showNotifications , setShowNotifications] = useState(false)
  // const {isLogin} = useContext(AuthContext)
  return (
    <>
      {
        // isLogin ? 
          <div className="flex w-full relative bg-[#F4F9FD]">
            <Notifications showNotifications={showNotifications} setShowNotifications={setShowNotifications}/>
            {/* <AddEventModal/> */}
            <div className="w-[15%]">
              <Aside active={active} setActive={setActive}/>
            </div>
            <div className="w-[80%] mx-auto pl-3 flex items-center flex-col gap-3">
              <Nav setShowNotifications={setShowNotifications} showNotifications={showNotifications} />
              {
                active === 'Dashboard' ? <Dashboard />:
                active === "Projects" ? <ProjectsDashboard/> :
                active === "Calendar" ? <Calender/> : 
                active === "Info Portal" ? <Profile/> :
                active === "Employees" ? <EmployeeList/>  : 
                active === "Vacations" ? <VacationDashboard/> :  null
              }
            </div>
          </div>
          // :
          // <HomePage/>
      }
    </>
  );
}
