"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isLocationOpen, setIsLocationOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/logo.png" className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">DR SAUCY</span>
            </Link>
          </div>

          {/* Deliver to Section */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-sm font-medium">Deliver to</div>
                  <div className="text-sm text-gray-600">Baddo Murade, Sheikhupura</div>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${isLocationOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Location Dropdown */}
              {isLocationOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                    Baddo Murade, Sheikhupura
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                    City Center, Sheikhupura
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                    Main Bazaar, Sheikhupura
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Cart and Auth */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>

            {/* Sign In / Register */}
            <Link
              href="/auth"
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Sign In / Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
