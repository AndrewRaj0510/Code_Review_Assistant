'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SunIcon, MoonIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300">
      
      {/* LEFT: Profile + Name */}
      <div className="flex items-center space-x-3">
        <button className="rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 w-8 h-8 hover:scale-110 transition-transform duration-200">
          <Image
            src="/passport.jpg"
            alt="Profile Picture"
            width={32}
            height={32}
            className="object-cover w-full h-full"
          />
        </button>
        <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm">Andrew Isaac Raj G</span>
      </div>

      {/* RIGHT: Toggle + Mail */}
      <div className="flex items-center space-x-4">
        {/* Dark / Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform duration-200"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-600" />}
        </button>

        {/* Mail Icon */}
        <a
          href="#contact"
          className="relative p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white hover:-translate-y-1"
          title="Navigate to Contact"
        >
          <EnvelopeIcon className="w-5 h-5" />
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 hover:scale-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-all duration-200">
          </span>
        </a>
      </div>
    </nav>
  )
}