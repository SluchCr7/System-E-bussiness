import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Projects');
  const [filter, setFilter] = useState('Current Projects');

  const user = {
    name: 'Evan Yates',
    role: 'UI/UX Designer',
    company: 'Cadabra',
    location: 'NYC, New York, USA',
    birthday: 'May 19, 1996',
    email: 'evanyates@gmail.com',
    phone: '+1 675 346 23-10',
    skype: 'Evan 2256',
  };

  const allProjects = [
    {
      id: 'PN0001265',
      name: 'Medical App (iOS native)',
      created: 'Sep 12, 2020',
      priority: 'Medium',
      priorityColor: 'text-yellow-500',
      totalTasks: 34,
      activeTasks: 13,
      assignees: 2,
      archived: false,
    },
    {
      id: 'PN0001221',
      name: 'Food Delivery Service',
      created: 'Sep 10, 2020',
      priority: 'Medium',
      priorityColor: 'text-yellow-500',
      totalTasks: 50,
      activeTasks: 24,
      assignees: 4,
      archived: false,
    },
    {
      id: 'PN0001290',
      name: 'Internal Project',
      created: 'May 28, 2020',
      priority: 'Low',
      priorityColor: 'text-green-500',
      totalTasks: 23,
      activeTasks: 20,
      assignees: 5,
      archived: true,
    },
  ];

  const filteredProjects = allProjects.filter(
    (project) =>
      (filter === 'Current Projects' && !project.archived) ||
      (filter === 'Archived Projects' && project.archived)
  );

  const tabs = ['Projects', 'Team', 'My vacations'];

  return (
    <div className="p-4 w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar */}
      <aside className="bg-white rounded-2xl shadow p-4 col-span-1">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src="https://via.placeholder.com/96" />
            <AvatarFallback>EY</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
        </div>

        <section className="mt-6 border-t border-gray-300 pt-2 w-full">
          <h3 className="font-semibold mb-2">Main info</h3>
          <ul className="text-sm space-y-1 flex items-start flex-col gap-4 w-full">
                      <li className='flex items-start flex-col gap-2 w-full'>
                          <strong className='text-sm text-gray-400'>Position:</strong>
                          <div className='border border-gray-100 p-3 w-full rounded-lg'>{user.role}</div>
                      </li>
            <li className='flex items-start flex-col gap-2 w-full'><strong className='text-sm text-gray-400'>Company:</strong><div className='border border-gray-100 p-3 w-full rounded-lg'>{user.company}</div> </li>
            <li className='flex items-start flex-col gap-2 w-full'><strong className='text-sm text-gray-400'>Location:</strong><div className='border border-gray-100 p-3 w-full rounded-lg'>{user.location}</div> </li>
            <li className='flex items-start flex-col gap-2 w-full'><strong className='text-sm text-gray-400'>Birthday:</strong><div className='border border-gray-100 p-3 w-full rounded-lg'>{user.birthday}</div> </li>
          </ul>
        </section>

        <section className="mt-6 border-t border-gray-300 pt-2 w-full">
          <h3 className="font-semibold mb-2">Contact Info</h3>
          <ul className="text-sm space-y-1 flex items-start flex-col gap-4 w-full">
            <li className='flex items-start flex-col gap-2 w-full'><strong className='text-sm text-gray-400'>Email:</strong> <div className='border border-gray-100 p-3 w-full rounded-lg'>{user.email}</div> </li>
            <li className='flex items-start flex-col gap-2 w-full'><strong className='text-sm text-gray-400'>Phone:</strong> <div className='border border-gray-100 p-3 w-full rounded-lg'>{user.phone}</div></li>
            <li className='flex items-start flex-col gap-2 w-full'><strong className='text-sm text-gray-400'>Skype:</strong> <div className='border border-gray-100 p-3 w-full rounded-lg'>{user.skype}</div></li>
          </ul>
        </section>
      </aside>

      {/* Main Content */}
      <main className="col-span-1 md:col-span-3">
        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? 'default' : 'ghost'}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
          {activeTab === 'Projects' && (
            <select
              className="border rounded px-2 py-1 text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>Current Projects</option>
              <option>Archived Projects</option>
            </select>
          )}
        </div>

        {activeTab === 'Projects' && (
          <div className="grid gap-4">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="p-4 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">{project.id}</p>
                  <h4 className="font-semibold text-lg">{project.name}</h4>
                  <p className="text-sm text-gray-500">Created {project.created}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${project.priorityColor}`}>{project.priority}</p>
                  <p className="text-sm mt-2">All tasks: {project.totalTasks}</p>
                  <p className="text-sm">Active tasks: {project.activeTasks}</p>
                  <p className="text-sm mt-2">Assignees: +{project.assignees}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'Team' && <p className="text-gray-500">Team view coming soon...</p>}
        {activeTab === 'My vacations' && <p className="text-gray-500">Vacation view coming soon...</p>}
      </main>
    </div>
  );
};

export default Profile;