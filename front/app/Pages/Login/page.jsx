'use client'
import { useAuth } from '../../Context/AuthContext'
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

export default function LoginPage() {
  const { login } = useAuth()
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  return (
    <div className="min-h-screen flex">
      {/* Left side illustration */}
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-bold mb-4">Wookroom</h1>
        <h2 className="text-xl font-semibold">Your place to work</h2>
        <p className="text-lg">Plan. Create. Control.</p>
        <Image
            src="/design/login.svg"
            alt="illustration"
            className="mt-10 max-w-full"
            width={400} // Add the width and height of the image
            height={400}
        />
      </div>
      {/* Right side form */}
      <div className="w-1/2 flex justify-center items-center p-8 bg-white">
        <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In to Wookroom</h2>
            <form onSubmit={(e) => { e.preventDefault() ; login(name, password) }} className="space-y-4">
                <div>
                <label className="block text-sm mb-1">User Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
              />
                </div>
                <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  className="w-full border rounded px-3 py-2 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                </label>
                <Link href="/#" className="text-blue-600">Forgot Password?</Link>
                </div>

            <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Sign In →</button>
            </form>

            <p className="text-center text-sm mt-4">
                Don’t have an account? <Link href="/Pages/Signup" className="text-blue-600">Sign up</Link>
            </p>
        </div>
      </div>
    </div>
  );
}