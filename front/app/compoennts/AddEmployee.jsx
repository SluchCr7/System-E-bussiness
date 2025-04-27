import { FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function AddEmployeeModal({ showModal, setShowModal }) {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-30 ${showModal ? 'flex' : 'hidden'} items-center justify-center z-50`}>
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
            src="/placeholder-illustration.png"
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
            type="email"
            placeholder="memberemail@gmail.com"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="text-blue-600 text-sm hover:underline">
            + Add another Member
          </button>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}
