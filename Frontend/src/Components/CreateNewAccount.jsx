import React from 'react'
import LogoImage from "../assets/Logo.png";
export default function CreateNewAccount() {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-blue-900 p-6 rounded-lg w-80 text-center">
        <h2 className="text-xl font-semibold">SSO Login</h2>

        <p className="text-gray-300 mt-2">Use your company or Google account</p>

        <button className="mt-4 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 w-full rounded">
          Sign in with Google
        </button>

        <button className="mt-2 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 w-full rounded">
          Sign in with Microsoft
        </button>

        <button className="mt-2 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 w-full rounded">
          Sign in with Apple
        </button>

        <Link to="/" className="block mt-4 text-gray-300 hover:underline">
          Back to Login
        </Link>
      </div>
        </div>
    </>
  )
}
