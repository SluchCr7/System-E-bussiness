import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import AddEmployeeModal from "./AddEmployee";

const employees = [
  {
    id: 1,
    name: "Shawn Stone",
    email: "shawn.stone@gmail.com",
    gender: "Male",
    birthday: "Apr 12, 1995",
    age: 29,
    position: "UI/UX Designer",
    level: "Middle",
    avatar: "https://i.pravatar.cc/150?img=10",
    stats: { backlog: 0, inProgress: 16, inReview: 6 },
  },
  {
    id: 2,
    name: "Randy Delgado",
    email: "randy.delgado@gmail.com",
    gender: "Male",
    birthday: "Apr 28, 1992",
    age: 32,
    position: "UI/UX Designer",
    level: "Middle",
    avatar: "https://i.pravatar.cc/150?img=11",
    stats: { backlog: 1, inProgress: 20, inReview: 2 },
  },
  {
    id: 3,
    name: "Emily Tyler",
    email: "tyleremily244@gmail.com",
    gender: "Female",
    birthday: "May 16, 1996",
    age: 28,
    position: "Copywriter",
    level: "Junior",
    avatar: "https://i.pravatar.cc/150?img=12",
    stats: { backlog: 0, inProgress: 20, inReview: 1 },
  },
  {
    id: 4,
    name: "Louis Castro",
    email: "louis.castro@gmail.com",
    gender: "Male",
    birthday: "May 16, 1994",
    age: 30,
    position: "Copywriter",
    level: "Middle",
    avatar: "https://i.pravatar.cc/150?img=13",
    stats: { backlog: 1, inProgress: 20, inReview: 2 },
  },
  {
    id: 5,
    name: "Millie Harvey",
    email: "millie.harvey@gmail.com",
    gender: "Female",
    birthday: "Aug 23, 1998",
    age: 26,
    position: "Android Developer",
    level: "Junior",
    avatar: "https://i.pravatar.cc/150?img=14",
    stats: { backlog: 1, inProgress: 1, inReview: 3 },
  },
  // add more people similarly...
];

const PER_PAGE = 4;

export default function EmployeeList() {
  const [page, setPage] = useState(0);
  const [activeView, setActiveView] = useState("List")
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const totalPages = Math.ceil(employees.length / PER_PAGE);

  const currentEmployees = employees.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE
  );

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const changeView = (view) => {
    setActiveView(view);
    setPage(0); // reset to first page when switching
  };

  return (
    <div className="p-6 space-y-6 w-full relative">
      <AddEmployeeModal showModal={showModal} setShowModal={setShowModal}/>
      <div className="flex justify-between  items-center">
        <h1 className="text-2xl font-bold">
          Employees ({employees.length})
        </h1>
        <div className="flex items-center bg-white rounded-xl overflow-hidden">
          {["List", "Activity"].map((view) => (
            <button
              key={view}
              onClick={() => changeView(view)}
              className={`px-4 py-2 text-sm ${
                activeView === view
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {view}
            </button>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowModal(true)}>Add Employee</button>
      </div>
      
      {activeView === "List" ? (
        <div className="grid gap-4 w-full">
          {currentEmployees.map((emp) => (
            <Card onClick={() => setSelectedEmployee(emp)} key={emp.id} className="shadow p-4 flex justify-between items-center">
            <div className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                {/* Profile Section */}
                <div className="flex w-full items-center gap-4">
                  <img
                    src="/assets/images/emp-1.png"
                    alt={emp.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{emp.name}</p>
                    <p className="text-sm text-gray-500">{emp.email}</p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex items-center justify-between w-[100%] gap-5">
                  {/* Gender */}
                  <div className="flex flex-col w-full items-start">
                    <p className="text-xs text-gray-400 mb-1">Gender</p>
                    <p className="text-sm font-medium text-gray-700">{emp.gender}</p>
                  </div>

                  {/* Birthday */}
                  <div className="flex flex-col w-full items-start">
                    <p className="text-xs text-gray-400 mb-1">Birthday</p>
                    <p className="text-sm font-medium text-gray-700">{emp.birthday}</p>
                  </div>

                  {/* Age */}
                  <div className="flex flex-col w-full items-start">
                    <p className="text-xs text-gray-400 mb-1">Age</p>
                    <p className="text-sm font-medium text-gray-700">{emp.age}</p>
                  </div>
                </div>
                {/* Position */}
                <div className="flex flex-col w-full items-start">
                  <p className="text-xs text-gray-400 mb-1">Position</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-medium text-gray-700">{emp.position}</span>
                    <span className="px-2 py-0.5 text-xs bg-gray-100 rounded">{emp.level}</span>
                  </div>
                </div>

                {/* Options */}
                <BiDotsVerticalRounded className="text-7xl text-gray-400 cursor-pointer" />
              </div>

            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentEmployees.map((emp) => (
            <Card
              key={emp.id}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
            >
              <div className="flex flex-col items-center gap-2 bg-blue-50 w-full p-3 rounded-lg">
                <Image
                  src={"/assets/images/emp-1.png"}
                  alt={emp.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <h3 className="text-md font-semibold">{emp.name}</h3>
                <p className="text-sm text-gray-500">{emp.position}</p>
                <span className="mt-2 inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {emp.level}
                </span>
              </div>

              <div className="flex justify-around w-full mt-4 text-sm text-gray-600">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl">{emp.stats?.backlog ?? 0}</span>
                  <span className="text-xs w-[70%]">Backlog tasks</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl">{emp.stats?.inProgress ?? 0}</span>
                  <span className="text-xs w-[70%]">Tasks In Progress</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl">{emp.stats?.inReview ?? 0}</span>
                  <span className="text-xs w-[80%]">Tasks In Review</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          onClick={handlePrev}
          disabled={page === 0}
          variant="outline"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <Button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          variant="outline"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
