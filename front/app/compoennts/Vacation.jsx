import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const vacationData = [
  {
    name: "Ryan Thompson",
    email: "ryanthom@gmail.com",
    vacations: 15,
    sickLeave: 3,
    workRemotely: 50,
  },
  {
    name: "Vincent Allen",
    email: "vincentall@gmail.com",
    vacations: 10,
    sickLeave: 6,
    workRemotely: 34,
  },
  {
    name: "Grace Joseph",
    email: "gracej09@gmail.com",
    vacations: 10,
    sickLeave: 5,
    workRemotely: 19,
  },
  {
    name: "Emily Tyler",
    email: "tyleremily244@gmail.com",
    vacations: 8,
    sickLeave: 7,
    workRemotely: 41,
  },
  {
    name: "Lenora Fowler",
    email: "eravi@ec.gov",
    vacations: 14,
    sickLeave: 4,
    workRemotely: 38,
  },
  {
    name: "Maude Goodman",
    email: "maudegood@gmail.com",
    vacations: 12,
    sickLeave: 6,
    workRemotely: 45,
  },
  {
    name: "Delia Santos",
    email: "santos1993@gmail.com",
    vacations: 10,
    sickLeave: 5,
    workRemotely: 12,
  },
  {
    name: "Brandon Potter",
    email: "brandonp@gmail.com",
    vacations: 8,
    sickLeave: 7,
    workRemotely: 48,
  },
];

export default function VacationDashboard() {
  const [view, setView] = useState("vacations");

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vacations</h1>
        <div className="bg-gray-100 rounded-full p-1 flex">
        <button
            onClick={() => setView("vacations")}
            className={cn(
            "px-4 py-1 rounded-full text-sm font-medium",
            view === "vacations" ? "bg-blue-500 text-white" : "text-gray-500"
            )}
        >
            Employees with vacations
        </button>
        <button
            onClick={() => setView("calendar")}
            className={cn(
            "px-4 py-1 rounded-full text-sm font-medium",
            view === "calendar" ? "bg-blue-500 text-white" : "text-gray-500"
            )}
        >
            Calendar
        </button>
        </div>
        <div className="flex items-center space-x-4">
          <Button>+ Add Request</Button>
        </div>
      </div>

      <div className="space-y-4">
        {vacationData.map((emp, idx) => (
          <Card key={idx} className="p-4 flex justify-between items-center">
            <div>
              <p className="font-medium text-md">{emp.name}</p>
              <p className="text-gray-500 text-sm">{emp.email}</p>
            </div>
            <div className="flex space-x-12 text-center">
              <div className="flex items-start flex-col gap-1">
                <p className="text-sm text-gray-400">Vacations</p>
                <p className="text-lg font-semibold">{emp.vacations}</p>
              </div>
              <div className="flex items-start flex-col gap-1">
                <p className="text-sm text-gray-400">Sick Leave</p>
                <p className="text-lg font-semibold">{emp.sickLeave}</p>
              </div>
              <div className="flex items-start flex-col gap-1">
                <p className="text-sm text-gray-400">Work remotely</p>
                <p className="text-lg font-semibold">{emp.workRemotely}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}