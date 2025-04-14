'use client';
import { useState } from 'react';

export default function AddEventModal({ open, onOpenChange }) {
  const [repeat, setRepeat] = useState(true);
  const [frequency, setFrequency] = useState('Daily');
  const [selectedDays, setSelectedDays] = useState(['Tue', 'Fri']);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  if (open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
    <div className="mx-auto mt-10 mb-10 max-w-lg bg-white rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={() => onOpenChange(false)}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Add Event</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Event Name</label>
            <input
              type="text"
              placeholder="Katy's Birthday"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Event Category</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Corporate Event</option>
              <option>Birthday</option>
              <option>Holiday</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Low</option>
              <option selected>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Date</label>
              <input type="date" className="w-full border rounded-md px-3 py-2" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Time</label>
              <input type="time" className="w-full border rounded-md px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              placeholder="Add some description of the event"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">Repeat Event</span>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={repeat}
                  onChange={(e) => setRepeat(e.target.checked)}
                />
              </label>
            </div>
        </div>
        <div className='w-full'>
            
            <div className="space-y-2 flex items-start flex-col gap-2">
                <span className='text-sm'>Complete this task :</span>
                <div className="flex justify-between w-full items-center gap-2">
                {['Daily', 'Weekly', 'Monthly'].map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={`px-3 py-2 rounded-md border w-full ${
                      frequency === freq ? 'bg-blue-500 text-white' : 'bg-white'
                    }`}
                  >
                    {freq}
                  </button>
                ))}
              </div>

              <div className="flex w-full">
                <div className='flex items-start flex-col w-full gap-2'>
                    <span className='text-sm'>Select Days</span>
                    <div className='flex gap-2 items-center justify-between w-full'>    
                        {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => toggleDay(day)}
                            className={`px-3 py-2 rounded-md border text-sm w-full ${
                            selectedDays.includes(day) ? 'bg-blue-500 text-white' : 'bg-white'
                            }`}
                        >
                            {day}
                        </button>
                        ))}
                    </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input type="checkbox" checked readOnly />
                <label className="text-sm">Repeat every day</label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input type="time" className="w-full border rounded-md px-3 py-2" />
              </div>
            </div>
        </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Save Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
