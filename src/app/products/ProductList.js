'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import CategoryFilter from './CategoryFilter'

export default function ProductList({ initialProducts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [products] = useState(initialProducts)

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => {
        const category = categories.find(cat => cat.id.toString() === selectedCategory)
        return category?.products?.some(p => p.id === product.id)
      })

  return (
    <>
      <CategoryFilter 
        categories={categories} 
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-72 overflow-hidden">
              {product.Image?.url ? (
               <Image
                 src={product.Image.url}
                 alt={product.Name}
                 fill
                 sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
                 priority={product.Image.id <= 8}
                 fetchPriority={product.Image.id <= 8 ? "high" : "auto"}
                 loading={product.Image.id <= 8 ? "eager" : "lazy"}
               />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                ${product.Price}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-2">{product.Name}</h2>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {product.Description?.[0]?.children?.[0]?.text || 'No description available'}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600">4.9</span>
                </div>
                <a 
                  href={`/products/${product.documentId}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  View Details
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
} 