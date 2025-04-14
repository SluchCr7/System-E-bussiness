'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GoHome } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuMessageCircle } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Image from 'next/image';

const navItems = [
  { name: 'Dashboard', icon: <GoHome className="w-5 h-5" />, href: '/' },
  // { name: 'Projects', icon: <CiFolderOn className="w-5 h-5" />, href: '/projects' },
  { name: 'Calendar', icon: <CiCalendar className="w-5 h-5" />, href: '/calendar' },
  { name: 'Vacations', icon: <CiSun className="w-5 h-5" />, href: '/vacations' },
  { name: 'Employees', icon: <CiUser className="w-5 h-5" />, href: '/employees' },
  { name: 'Info Portal', icon: <CiCircleInfo className="w-5 h-5" />, href: '/info' },
];

export default function Aside({active , setActive}) {
  return (
    <aside className="bg-white min-h-screen w-64 border-r flex flex-col items-start justify-between py-6 px-4">
      <div>
        <div className="text-xl font-bold text-gray-700 mb-8">Logo</div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 transition ${
                active === item.name ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-600'
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </nav>
      </div>

      <div className="px-4 flex items-start flex-col gap-3 py-8">
        <div className="bg-blue-50 p-4 rounded-2xl shadow-md flex flex-col items-center w-44">
          <div className="w-24 h-24 mb-3 relative">
            <Image
              src="/design/support.svg" // Replace with your image path
              alt="Support"
              fill
              className="object-contain"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-600 transition">
            <LuMessageCircle className="w-4 h-4" />
            Support
          </button>
        </div>
        <button className="flex items-center  gap-2 w-full text-red-500 py-2 hover:bg-red-50 rounded-lg transition">
          <CiLogout className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
