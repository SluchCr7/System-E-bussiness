import Link from 'next/link'
import React from 'react'

const HomePage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-6">
      <div className="max-w-xl text-center bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-2xl uppercase font-bold text-blue-600 mb-4">Welcome to System</h1>
        <p className="text-gray-700 text-sm mb-6">
          Connect with friends, share moments, and chat in real-time. Join our community today!
        </p>
        <button
          
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition"
        >
          <Link href="/Pages/Login">Go to Login</Link>
        </button>
      </div>
    </div>
  )
}

export default HomePage
