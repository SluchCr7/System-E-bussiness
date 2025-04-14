'use client';

import Image from 'next/image';
import { Calendar, ArrowDown, ArrowUp, Users } from 'lucide-react';

const users = [
  { name: 'Shawn Stone', role: 'UI/UX Designer', level: 'Middle', img: '/avatars/user1.png' },
  { name: 'Randy Delgado', role: 'UI/UX Designer', level: 'Junior', img: '/avatars/user2.png' },
  { name: 'Emily Tyler', role: 'Copywriter', level: 'Middle', img: '/avatars/user3.png' },
  { name: 'Louis Castro', role: 'Copywriter', level: 'Senior', img: '/avatars/user4.png' },
  { name: 'Blake Silva', role: 'iOS Developer', level: 'Senior', img: '/avatars/user5.png' },
  { name: 'Joel Phillips', role: 'UI/UX Designer', level: 'Middle', img: '/avatars/user6.png' },
  { name: 'Wayne Marsh', role: 'Copywriter', level: 'Junior', img: '/avatars/user7.png' },
  { name: 'Oscar Holloway', role: 'UI/UX Designer', level: 'Middle', img: '/avatars/user8.png' },
];

const projects = [
  {
    title: 'Medical App (iOS native)',
    date: 'Sep 12, 2020',
    priority: 'Medium',
    stats: { all: 34, active: 13, assignees: 5 },
  },
  {
    title: 'Food Delivery Service',
    date: 'Sep 10, 2020',
    priority: 'Medium',
    stats: { all: 50, active: 24, assignees: 3 },
  },
  {
    title: 'Food Delivery Service',
    date: 'May 28, 2020',
    priority: 'Low',
    stats: { all: 20, active: 5, assignees: 2 },
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-sm font-semibold text-gray-400">Welcome back, Evan!</h1>
        <span className="text-2xl font-semibold">Dashboard</span>
      {/* Workload */}
      <section className="bg-white rounded-xl shadow p-5">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Workload</h2>
          <a className="text-blue-600 text-sm font-medium" href="#">View all</a>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {users.map((user, i) => (
            <div key={i} className="bg-blue-50 p-4 rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-2">
                <Image src={user.img} alt={user.name} width={64} height={64} className="rounded-full" />
              </div>
              <p className="font-medium text-sm">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
              <span className="text-xs text-gray-400">{user.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Projects */}
        <section className="col-span-2 bg-white rounded-xl shadow p-5">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Projects</h2>
            <a className="text-blue-600 text-sm font-medium" href="#">View all</a>
          </div>
          <div className="space-y-4">
            {projects.map((project, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">{project.title}</p>
                  <p className="text-xs text-gray-500">Created {project.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-gray-600">Project Data</p>
                  <p className="text-xs">All tasks: {project.stats.all}</p>
                  <p className="text-xs">Active tasks: {project.stats.active}</p>
                  <p className="text-xs flex items-center justify-end">
                    <Users className="w-4 h-4 mr-1" /> +{project.stats.assignees}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Events */}
          <section className="bg-white rounded-xl shadow p-5">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Nearest Events</h2>
              <a className="text-blue-600 text-sm font-medium" href="#">View all</a>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <p>Presentation of the new department</p>
                <ArrowUp className="w-4 h-4 text-yellow-500" />
              </div>
              <div className="flex justify-between items-center">
                <p>Anna's Birthday</p>
                <ArrowDown className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex justify-between items-center">
                <p>Ray's Birthday</p>
                <ArrowDown className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </section>

          {/* Activity Stream */}
          <section className="bg-white rounded-xl shadow p-5">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Activity Stream</h2>
              <a className="text-blue-600 text-sm font-medium" href="#">View more</a>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Oscar Holloway</p>
                <p>Updated the status of Mind Map task to In Progress</p>
              </div>
              <div>
                <p className="font-medium">Oscar Holloway</p>
                <p>Attached files to the task</p>
              </div>
              <div>
                <p className="font-medium">Emily Tyler</p>
                <p>Updated the status of Mind Map task to In Progress</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
