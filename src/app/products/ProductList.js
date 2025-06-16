"use client"

import { useState } from "react"
import Image from "next/image"
import CategoryFilter from "./CategoryFilter"

export default function ProductList({ initialProducts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [products] = useState(initialProducts)

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => {
          const category = categories.find((cat) => cat.id.toString() === selectedCategory)
          return category?.products?.some((p) => p.id === product.id)
        })

  return (
    <>
      <CategoryFilter categories={categories} onCategoryChange={setSelectedCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in border border-white/50 hover:border-orange-200/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-80 overflow-hidden">
              {product.Image?.url ? (
                <Image
                  src={product.Image.url || "/placeholder.svg"}
                  alt={product.Name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 bg-white"
                  priority={product.Image.id <= 8}
                  fetchPriority={product.Image.id <= 8 ? "high" : "auto"}
                  loading={product.Image.id <= 8 ? "eager" : "lazy"}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-slate-400 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-slate-500 font-medium">No image available</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating Price Tag - Updated with food colors */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-2xl text-lg font-bold shadow-lg backdrop-blur-sm border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
                ${product.Price}
              </div>
            </div>

            <div className="p-8 relative">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {product.Name}
              </h2>

              <p className="text-slate-600 mb-6 line-clamp-1 leading-relaxed">
                {product.Description?.[0]?.children?.[0]?.text ||
                  "Discover the perfect blend of style and functionality in this carefully crafted product."}
              </p>

              {/* Rating Section */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-slate-600 font-medium">4.9</span>
                <span className="text-slate-400 text-sm">(127)</span>
              </div>

              {/* View Details Button - Food-themed */}
              <a
                href={`/products/${product.documentId}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-base group/btn"
              >
                View Details
                <svg
                  className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-700 mb-4">No products found</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            We couldn't find any products in this category. Try selecting a different category or check back later.
          </p>
        </div>
      )}
    </>
  )
}
