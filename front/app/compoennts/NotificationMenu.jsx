"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";

const initialNotifications = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    message: "Emily Tyler sent you a comment in Research task",
    time: "2h ago",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=2",
    message: "Updated the status of Mind Map task to In Progress",
    time: "6h ago",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=3",
    message: "Blake Silva assigned the issue to you",
    time: "Today 9:30 AM",
  },
];

export default function Notifications({showNotifications , setShowNotifications}) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className={`w-96 bg-white rounded-2xl fixed top-16 right-4 shadow-lg p-4 ${showNotifications ? 'opacity-100' : ' opacity-0 pointer-events-none'} flex flex-col max-h-[90vh]`}>
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button onClick={clearNotifications} className="text-gray-400 hover:text-gray-600 transition">
          <FiX size={22} />
        </button>
      </div>

      {/* Notification List */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex gap-3 p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer items-start"
            >
              <img
                src={notif.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm leading-tight">{notif.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 text-sm py-10">
            No notifications
          </div>
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="pt-4">
          <button
            onClick={clearNotifications}
            className="w-full bg-gray-100 hover:bg-gray-200 text-sm font-medium py-2 rounded-lg transition"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
