'use client';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useEmploy } from '../Context/EmployContext';
import { useState } from 'react';

export default function AddEmployeeModal({ showModal, setShowModal }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [job, setJob] = useState('');
  const [file, setfile] = useState(null);
  const [Address, setAddress] = useState('');
  const [department, setDepartment] = useState(1);
  const { addEmployee } = useEmploy();

  const departments = ['IT', 'IS', 'CS', 'AI'];

  const handleSubmit = () => {
    if (!email || !name || !phone || !job  ) {
      alert('Please fill in all fields');
      return;
    }

    addEmployee( file ,name, email, phone, Address,job, department );


    // Clear form and close modal
    // setEmail('');
    // setName('');
    // setPhone('');
    // setJob('');
    // setDepartment('');
    // setShowModal(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 ${
        showModal ? 'flex' : 'hidden'
      } items-center justify-center z-50`}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>

        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <Image
            src="/design/jop.png"
            alt="Illustration"
            width={150}
            height={150}
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">Add Employee</h2>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="file"
            onChange={(e) => setfile(e.target.files[0])}
            placeholder="Upload Image"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />


          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="memberemail@gmail.com"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          




          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Job Title"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        
          <select
            // value={department}
            // onChange={(e) => setDepartment(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Department
            </option>
            {departments.map((dep, i) => (
              <option key={i} value={dep}>
                {dep}
              </option>
            ))}
          </select>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}
