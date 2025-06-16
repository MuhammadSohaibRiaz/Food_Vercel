"use client"

import { useState } from "react"

export default function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    onCategoryChange(categoryId)
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-20 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <button
        onClick={() => handleCategoryChange("all")}
        className={`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm font-semibold text-lg ${
          selectedCategory === "all"
            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/25 border border-white/20"
            : "bg-white/80 text-slate-700 hover:bg-white shadow-lg hover:shadow-xl border border-slate-200/50 hover:border-orange-200"
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id.toString())}
          className={`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm font-semibold text-lg ${
            selectedCategory === category.id.toString()
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl shadow-orange-500/25 border border-white/20"
              : "bg-white/80 text-slate-700 hover:bg-white shadow-lg hover:shadow-xl border border-slate-200/50 hover:border-orange-200"
          }`}
        >
          {category.Name}
        </button>
      ))}
    </div>
  )
}
