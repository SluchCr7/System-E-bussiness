'use client';

import Image from 'next/image';
import { Calendar, ArrowDown, ArrowUp, Users } from 'lucide-react';
import { CiCalendar } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { useAuth } from '../Context/AuthContext';

// const users = [
//   { name: 'Shawn Stone', role: 'UI/UX Designer', level: 'Middle', img: '/avatars/user1.png' },
//   { name: 'Randy Delgado', role: 'UI/UX Designer', level: 'Junior', img: '/avatars/user2.png' },
//   { name: 'Emily Tyler', role: 'Copywriter', level: 'Middle', img: '/avatars/user3.png' },
//   { name: 'Louis Castro', role: 'Copywriter', level: 'Senior', img: '/avatars/user4.png' },
//   { name: 'Blake Silva', role: 'iOS Developer', level: 'Senior', img: '/avatars/user5.png' },
//   { name: 'Joel Phillips', role: 'UI/UX Designer', level: 'Middle', img: '/avatars/user6.png' },
//   { name: 'Wayne Marsh', role: 'Copywriter', level: 'Junior', img: '/avatars/user7.png' },
//   { name: 'Oscar Holloway', role: 'UI/UX Designer', level: 'Middle', img: '/avatars/user8.png' },
// ];

// const projects = [
//   {
//     title: 'Medical App (iOS native)',
//     date: 'Sep 12, 2020',
//     priority: 'Medium',
//     stats: { all: 34, active: 13, assignees: 5 },
//   },
//   {
//     title: 'Food Delivery Service',
//     date: 'Sep 10, 2020',
//     priority: 'Medium',
//     stats: { all: 50, active: 24, assignees: 3 },
//   },
//   {
//     title: 'Food Delivery Service',
//     date: 'May 28, 2020',
//     priority: 'Low',
//     stats: { all: 20, active: 5, assignees: 2 },
//   },
// ];


export default function Dashboard() {
  const { employeesDash , events , projects } = useAuth()
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-sm font-semibold text-gray-400">Welcome back</h1>
        <span className="text-2xl font-semibold">Dashboard</span>
      {/* Workload */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <section className="bg-white rounded-xl w-full shadow p-5 col-span-2">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Workload</h2>
            <a className="text-blue-600 text-sm font-medium" href="#">View all</a>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {employeesDash.map((user, i) => (
              <div key={i} className="bg-blue-50 p-4 rounded-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-2">
                  <Image src={"/images/JDJO"} alt={user.name} width={64} height={64} className="rounded-full" />
                </div>
                <p className="font-medium text-sm">{user.fullName}</p>
                <p className="text-xs text-gray-500">{user.jobTitle}</p>
                <span className="text-xs text-gray-400">{new Date(user.hireDate).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Events */}
        <section className="bg-white rounded-xl w-full shadow p-5 col-span-1 space-y-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Nearest Events</h2>
            <a className="text-blue-600 text-sm font-medium" href="#">View all</a>
          </div>
          <div className="space-y-3 text-sm flex items-start flex-col gap-7">
            {
              events.map((event) => {
                return (
                <div key={event.id} className='flex items-start w-full border-l-[3px] pl-3 border-red-500 flex-col gap-5'>
                  <div className="flex justify-between w-full items-center">
                    <p>{event.name}</p>
                    <ArrowDown className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <span>{new Date(event.createdDate).toLocaleDateString()}</span>
                    <div className="flex items-center gap-1 bg-gray-600 p-2 rounded-lg">
                      <span className='text-white text-xs'>4h</span>
                      <CiTimer className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </section>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Projects */}
        <section className="col-span-2 bg-white rounded-xl shadow p-5">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Projects</h2>
            <a className="text-blue-600 text-sm font-medium" href="#">View all</a>
          </div>
          <div className="space-y-4">
            {projects.map((project, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-4 flex justify-between items-center w-full h-full">
                <div className='w-[50%] border-r border-gray-300 h-full'>
                  <p className="font-semibold">{project.name}</p>
                  <div className='pt-2 pr-4 flex items-center justify-between w-full'>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <CiCalendar className="w-4 h-4" />
                      <span>Created {new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                    <span className="text-xs text-red-700">Medium</span>
                  </div>
                </div>
                <div className="w-[50%] pl-3">
                  <p className="text-base font-semibold text-gray-600">Project Data</p>
                  <div className='flex flex-col md:flex-row items-center gap-2 pt-2 w-full justify-between'>
                    <p className="text-xs flex items-start flex-col gap-1 text-gray-400">All tasks: <span className='text-black'>50</span></p>
                    <p className="text-xs flex items-start flex-col gap-1 text-gray-400">Active tasks: <span className='text-black'>24</span></p>
                    <p className="text-xs flex items-start flex-col gap-1 text-gray-400">
                      users <span className='text-black'>+11</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Activity Stream */}
          <section className="bg-white rounded-xl shadow p-5">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Activity Stream</h2>
              <a className="text-blue-600 text-sm font-medium" href="#">View more</a>
            </div>
            <div className="space-y-3 text-sm">
              <div className='flex flex-col items-start gap-2'>
                <div className="flex items-center gap-2">
                  <Image src="/avatars/user8.png" width={20} height={20} alt="" className='w-6 h-6 rounded-full' />
                  <div className='flex items-start gap-1 flex-col'>
                    <p className="font-medium">Eric Nathan</p>
                    <span className="text-xs text-gray-400">Front-end Developer</span>
                  </div>
                </div>
                <p className='bg-blue-50 p-3 rounded-lg'>Updated the status of Mind Map task to In Progress</p>
              </div>
              <div className='flex flex-col items-start gap-2'>
                <div className="flex items-center gap-2">
                  <Image src="/avatars/user8.png" width={20} height={20} alt="" className='w-6 h-6 rounded-full' />
                  <div className='flex items-start gap-1 flex-col'>
                    <p className="font-medium">Emily Tyler</p>
                    <span className="text-xs text-gray-400">Front-end Developer</span>
                  </div>
                </div>
                <p className='bg-blue-50 p-3 rounded-lg'>Updated the status of Mind Map task to In Progress</p>
              </div>
              <div className='flex flex-col items-start gap-2'>
                <div className="flex items-center gap-2">
                  <Image src="/avatars/user8.png" width={20} height={20} alt="" className='w-6 h-6 rounded-full' />
                  <div className='flex items-start gap-1 flex-col'>
                    <p className="font-medium">Oscar Holloway</p>
                    <span className="text-xs text-gray-400">Front-end Developer</span>
                  </div>
                </div>
                <p className='bg-blue-50 p-3 rounded-lg'>Updated the status of Mind Map task to In Progress</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
