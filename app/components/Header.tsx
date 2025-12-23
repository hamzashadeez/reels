"use client"
import React from 'react'

function Header() {
  return (
    <div className='h-17.5 shadow-md bg-white flex items-center justify-between px-6'>
        <h1 className='text-black'>Reels</h1>
        <div className="flex gap-2 items-center">
            <button className='bg-white text-black px-4 py-2 rounded-sm cursor-pointer hover:bg-gray-100'>Login</button>
            <button className='bg-white text-black px-4 py-2 rounded-sm cursor-pointer hover:bg-gray-100'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header