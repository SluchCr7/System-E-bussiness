import React, { useState } from 'react';
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  parseISO,
} from 'date-fns';
import { useDashboard } from '../Context/DashboardContext';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { events } = useDashboard();

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => (
    <div className="flex justify-between items-center py-4">
      <button onClick={prevMonth} className="px-4 py-2 bg-gray-200 rounded">←</button>
      <h2 className="text-lg font-bold">{format(currentMonth, 'MMMM yyyy')}</h2>
      <button onClick={nextMonth} className="px-4 py-2 bg-gray-200 rounded">→</button>
    </div>
  );

  const renderDays = () => {
    const startDate = startOfWeek(new Date());
    return (
      <div className="grid grid-cols-7 text-sm mb-2">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="text-center font-medium">
            {format(addDays(startDate, i), 'EEE')}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const dayEvents = events.filter(
          (event) => isSameDay(parseISO(event.createdDate), cloneDay)
        );

        days.push(
          <div
            className={`border h-24 p-1 text-xs overflow-y-auto ${
              !isSameMonth(day, monthStart) ? 'bg-gray-100 text-gray-400' : ''
            } ${isSameDay(day, new Date()) ? 'bg-blue-100 font-bold' : ''}`}
            key={day.toISOString()}
          >
            <div className="font-semibold">{format(day, 'd')}</div>
            {dayEvents.map((event) => (
              <div key={event.id} className="mt-1 px-1 py-0.5 bg-blue-200 text-blue-900 rounded text-xs truncate">
                {event.name}
              </div>
            ))}
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(
        <div className="grid grid-cols-7" key={day.toISOString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="grid gap-1">{rows}</div>;
  };

  return (
    <div className="p-4 w-full mx-auto">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold mb-4">Calendar</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Add Event</button>
      </div>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
