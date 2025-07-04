"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "good",
    author: "Amna Munir",
    location: "Sheikhupura",
    timeAgo: "2 months ago",
  },
  {
    id: 2,
    rating: 5,
    text: "Amazing food quality and fast delivery!",
    author: "Ahmed Khan",
    location: "Sheikhupura",
    timeAgo: "1 month ago",
  },
  {
    id: 3,
    rating: 4,
    text: "Great taste, will order again",
    author: "Fatima Ali",
    location: "Sheikhupura",
    timeAgo: "3 weeks ago",
  },
  {
    id: 4,
    rating: 5,
    text: "Best food delivery service in town",
    author: "Hassan Sheikh",
    location: "Sheikhupura",
    timeAgo: "2 weeks ago",
  },
]

export default function FloatingTestimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setIsVisible(true)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  const testimonial = testimonials[currentTestimonial]

  return (
    <div className="fixed top-32 right-4 z-40 animate-slide-in-right">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-sm relative transform transition-all duration-300 hover:scale-105">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
        >
          ×
        </button>

        {/* Stars */}
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500 ml-2">{testimonial.timeAgo}</span>
        </div>

        {/* Review Text */}
        <p className="text-gray-800 italic mb-4 text-lg">"{testimonial.text}"</p>

        {/* Author */}
        <div className="text-sm text-gray-600">
          <span className="font-medium">{testimonial.author}</span> - {testimonial.location}
        </div>
      </div>
    </div>
  )
}
