"use client";

import { FiPlus, FiFilter, FiList, FiGrid } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDashboard } from "../Context/DashboardContext";

export default function ProjectsDashboard() {
    const {projects} = useDashboard()
  return (
    <div className="flex min-h-screen w-full p-6 flex-col items-start gap-3">
        <div className="flex items-center justify-between w-full">  
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                <FiPlus />
                Add Project
            </button>
        </div>
        <div className="w-full flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-2xl shadow-md">        
            <div className="space-y-6">
            <div>
                <h3 className="text-xs text-gray-400 uppercase mb-2 p-3">Processes</h3>
                <ul className="space-y-3">
                <li className="flex flex-col items-start p-3 border-r-[4px] border-blue-600 gap-4 hover:bg-blue-50 text-sm text-gray-700">
                    <span className="font-semibold">{projects[0].name}</span>
                    <button className="text-blue-500 text-xs">View details &gt;</button>
                </li>
                {
                projects.map((project, i) => (
                  <li key={i} className="flex flex-col items-start p-3 border-r-[4px] border-transparent gap-4 hover:bg-blue-50 text-sm text-gray-700">
                    <span className="font-semibold">{project.name}</span>
                    <button className="text-blue-500 text-xs">View details &gt;</button>
                  </li>
                )).slice(1, 5)
                }
                </ul>
            </div>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Tasks</h2>
                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-blue-500">
                    <FiGrid size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-blue-500">
                    <FiList size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-blue-500">
                    <FaTasks size={20} />
                    </button>
                </div>
                <button className="text-gray-400 hover:text-blue-500">
                    <FiFilter size={20} />
                </button>
            </div>


            {/* Active Tasks */}
            <section className="mb-8">
            <h3 className="text-base font-semibold mb-4 w-full bg-gray-200 p-2 rounded-lg flex place-items-center justify-center">Active Tasks</h3>
            
            <div className="space-y-4">
                {/* Single Task */}
                {[
                { name: "Research", estimate: "2d 4h", spent: "1d 2h", priority: "Medium", status: "Done" },
                { name: "Mind Map", estimate: "1d 2h", spent: "4h 25m", priority: "Medium", status: "In Progress" },
                { name: "UX Sketches", estimate: "4d", spent: "2d 2h 20m", priority: "Low", status: "In Progress" },
                { name: "UX Login + Registration", estimate: "2d", spent: "3h 15m", priority: "Low", status: "To Do" },
                { name: "UI Login + Registration", estimate: "1d 2h", spent: "4h", priority: "Medium", status: "In Review" },
                { name: "UI for other screens", estimate: "4d", spent: "2d", priority: "Low", status: "In Progress" },
                ].map((task, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md">
                    <div className="flex-1">
                    <div className="font-semibold">{task.name}</div>
                    <div className="text-xs text-gray-400 flex gap-6 mt-2">
                        <span>Estimate: {task.estimate}</span>
                        <span>Spent Time: {task.spent}</span>
                    </div>
                    </div>
                    <div className="flex items-center gap-6">
                    <div className="flex -space-x-2">
                        <img src="/avatar1.png" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="/avatar2.png" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">{task.priority}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${task.status === "Done" ? "bg-green-100 text-green-700" : task.status === "In Progress" ? "bg-blue-100 text-blue-700" : task.status === "In Review" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-500"}`}>
                        {task.status}
                    </div>
                    <BsThreeDotsVertical className="text-gray-400" />
                    </div>
                </div>
                ))}
            </div>
            </section>

            {/* Backlog */}
            <section>
            <h3 className="text-base font-semibold mb-4 w-full bg-gray-200 p-2 rounded-lg flex place-items-center justify-center">Backlog</h3>
            
            <div className="space-y-4">
                {[
                { name: "Animation for buttons", estimate: "6h", spent: "0h", priority: "Medium" },
                { name: "Preloader", estimate: "2d", spent: "0h", priority: "Medium" },
                ].map((task, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md">
                    <div className="flex-1">
                    <div className="font-semibold">{task.name}</div>
                    <div className="text-xs text-gray-400 flex gap-6 mt-2">
                        <span>Estimate: {task.estimate}</span>
                        <span>Spent Time: {task.spent}</span>
                    </div>
                    </div>
                    <div className="flex items-center gap-6">
                    <div className="flex -space-x-2">
                        <img src="/avatar3.png" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">{task.priority}</div>
                    <div className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">To Do</div>
                    <BsThreeDotsVertical className="text-gray-400" />
                    </div>
                </div>
                ))}
            </div>
            </section>
        </main>
        </div>
    </div>
  );
}
