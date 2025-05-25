import React from 'react'
import Image from 'next/image'
import ProductList from './ProductList'

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`, { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?populate=*`, { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Failed to fetch categories')
  }
  return res.json()
}

export default async function ProductsPage() {
  const [productsData, categoriesData] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  const products = productsData.data
  const categories = categoriesData.data

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-white to-purple-300 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Our Products
          </h1>
          
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Discover our curated collection of premium products, crafted with attention to detail and quality.
          </p>
          
          <ProductList initialProducts={products} categories={categories} />
        </div>
      </div>
    </div>
  )
}