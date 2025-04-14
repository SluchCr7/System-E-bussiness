import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

const employees = [
  {
    name: "Evan Yates",
    email: "evanyates@gmail.com",
    gender: "Male",
    birthday: "Apr 12, 1995",
    age: 25,
    position: "UI/UX Designer",
    level: "Middle",
  },
  {
    name: "Lenora Fowler",
    email: "eravi@ec.gov",
    gender: "Female",
    birthday: "Apr 28, 1998",
    age: 23,
    position: "UI/UX Designer",
    level: "Junior",
  },
  {
    name: "Winnie McGuire",
    email: "winnie3498@gmail.com",
    gender: "Female",
    birthday: "Apr 12, 1995",
    age: 25,
    position: "Copywriter",
    level: "Senior",
  },
  {
    name: "James Williamson",
    email: "williamsonj@gmail.com",
    gender: "Male",
    birthday: "Sep 23, 1992",
    age: 28,
    position: "iOS Developer",
    level: "Middle",
  },
  {
    name: "Emily Tyler",
    email: "tyleremily244@gmail.com",
    gender: "Female",
    birthday: "May 16, 1996",
    age: 24,
    position: "UI/UX Designer",
    level: "Junior",
  },
  {
    name: "Thomas Schneider",
    email: "thomas.s@gmail.com",
    gender: "Male",
    birthday: "Apr 28, 1998",
    age: 23,
    position: "Sales Manager",
    level: "Junior",
  },
  {
    name: "Sallie Long",
    email: "sallielong@gmail.com",
    gender: "Female",
    birthday: "Apr 12, 1995",
    age: 25,
    position: "Copywriter",
    level: "Middle",
  },
  {
    name: "Kathryn Guerrero",
    email: "kathryn1992@gmail.com",
    gender: "Female",
    birthday: "Sep 23, 1992",
    age: 28,
    position: "iOS Developer",
    level: "Senior",
  },
  // Add more users if needed
];

const PER_PAGE = 5;

export default function EmployeeList() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(employees.length / PER_PAGE);
  const [activePage , setActivePage] = useState('List')
  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const currentEmployees = employees.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE
  );

  return (
    <div className="p-6 space-y-4 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employees ({employees.length})</h1>
        <div className="flex items-center bg-white rounded-xl">
          <span onClick={() => setActivePage('List')} className={`px-4 py-2 ${activePage === 'List' ? 'bg-blue-500 text-white' : 'text-gray-600'} `}>List</span>
          <span onClick={() => setActivePage('Activity')} className={`px-4 py-2 ${activePage === 'Activity' ? 'bg-blue-500 text-white' : 'text-gray-600'} `}>Activity</span>
        </div>
        <Button>Add Employee</Button>
      </div>

      <div className="grid gap-4 w-full">
        {currentEmployees.map((emp, i) => (
          <Card key={i} className="shadow p-4 w-full flex justify-between items-center">
            <div className="flex items-center justify-between w-full gap-x-6 gap-y-1 text-sm text-gray-700">
              <div className="flex flex-col items-start gap-1 w-full">
                <p className="font-semibold text-lg">{emp.name}</p>
                <p className="text-sm text-gray-500">{emp.email}</p>
              </div>
              <div className="flex flex-col items-start gap-1 w-full"><div>Gender:</div><div>{emp.gender}</div></div>
              <div className="flex flex-col items-start gap-1 w-full"><div>Birthday:</div><div>{emp.birthday}</div></div>
              <div className="flex flex-col items-start gap-1 w-full"><div>Full age:</div><div>{emp.age}</div></div>
              <div className="flex flex-col items-start gap-1 w-full"><div>Position:</div><div>{emp.position} <span className="ml-2 px-2 py-0.5 bg-gray-200 rounded text-xs">{emp.level}</span></div></div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button onClick={handlePrev} disabled={page === 0} variant="outline">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <p>
          Page {page + 1} of {totalPages}
        </p>
        <Button onClick={handleNext} disabled={page === totalPages - 1} variant="outline">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
