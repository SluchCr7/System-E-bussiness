'use client'
import Image from "next/image";
import AddEventModal from "./compoennts/AddEvent";
import Aside from "./compoennts/Aside";
import Nav from "./compoennts/Nav";
import {useState} from "react"
import Dashboard from "./compoennts/Dashboard";
import Calender from './compoennts/Calender'
import Profile from "./compoennts/Profile";
import EmployeeList from './compoennts/Employees'
import  VacationDashboard from './compoennts/Vacation'
export default function Home() {
  const [active, setActive] = useState('Dashboard');
  return (
    <div className="flex w-full bg-[#F4F9FD]">
      {/* <AddEventModal/> */}
      <div className="w-[15%]">
        <Aside active={active} setActive={setActive}/>
      </div>
      <div className="w-[80%] mx-auto pl-3 flex items-center flex-col gap-3">
        <Nav />
        {
          active === 'Dashboard' ? <Dashboard />:
          active === "Calendar" ? <Calender/> : 
          active === "Info Portal" ? <Profile/> :
          active === "Employees" ? <EmployeeList/>  : 
          active === "Vacations" ? <VacationDashboard/> : null
        }
      </div>
    </div>
  );
}
