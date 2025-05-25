'use client'

import React, { useState } from 'react'

export default function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    onCategoryChange(categoryId)
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
      <button
        onClick={() => handleCategoryChange('all')}
        className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
          selectedCategory === 'all'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200'
            : 'bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg'
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id.toString())}
          className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
            selectedCategory === category.id.toString()
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200'
              : 'bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg'
          }`}
        >
          {category.Name}
        </button>
      ))}
    </div>
  )
} 