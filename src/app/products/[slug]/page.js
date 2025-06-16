import Link from "next/link"
import Image from "next/image"

async function getProduct(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/products/${slug}?populate=*`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }
  return res.json()
}

async function getRelatedProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/products?populate=*&pagination[limit]=3`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch related products")
  }
  return res.json()
}

export default async function ProductDetailPage({ params }) {
  const { slug } = params
  const [productData, relatedProductsData] = await Promise.all([getProduct(slug), getRelatedProducts()])

  const product = productData.data
  const relatedProducts = relatedProductsData.data

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <p className="text-slate-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-purple-700 hover:to-emerald-700 transition-all duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm mb-12 animate-fade-in">
            <Link href="/" className="text-slate-500 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="text-slate-500 hover:text-purple-600 transition-colors font-medium">
              Products
            </Link>
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-800 font-semibold">{product.Name}</span>
          </nav>

          {/* Product Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Product Image */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm border border-white/50">
                {product.Image?.url ? (
                  <Image
                    src={product.Image.url || "/placeholder.svg"}
                    alt={product.Name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-24 h-24 text-slate-400 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-slate-500 font-medium text-lg">No image available</span>
                    </div>
                  </div>
                )}

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-2xl font-bold text-lg shadow-lg backdrop-blur-sm border border-white/20">
                  Premium
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
                {/* Product Title & Rating */}
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">{product.Name}</h1>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-slate-600 font-medium">4.9 (127 reviews)</span>
                  </div>

                  <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full mb-6"></div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                      ${product.Price}
                    </span>
                    <span className="text-2xl text-slate-400 line-through">${(product.Price * 1.2).toFixed(2)}</span>
                    <span className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Save 20%
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Description</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {product.Description?.[0]?.children?.[0]?.text ||
                      "Experience the perfect blend of style, comfort, and functionality with this premium product. Crafted with attention to detail and designed to enhance your everyday life."}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">Fast Shipping</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">1 Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">Easy Returns</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white transition-all duration-300 border border-slate-200 hover:border-purple-200 hover:text-purple-700">
                    Add to Wishlist
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">Free Shipping</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">Secure Payment</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">Easy Returns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts && relatedProducts.length > 0 && (
            <section className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600 mb-4">
                  You Might Also Like
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-emerald-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {relatedProducts.slice(0, 3).map((relatedProduct, index) => (
                  <div
                    key={relatedProduct.id}
                    className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 hover:border-purple-200/50 animate-fade-in"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      {relatedProduct.Image?.url ? (
                        <Image
                          src={relatedProduct.Image.url || "/placeholder.svg"}
                          alt={relatedProduct.Name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                          <svg
                            className="w-16 h-16 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-3 py-1 rounded-xl text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20">
                        ${relatedProduct.Price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                        {relatedProduct.Name}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                        {relatedProduct.Description?.[0]?.children?.[0]?.text ||
                          "Discover the perfect blend of style and functionality."}
                      </p>
                      <Link
                        href={`/products/${relatedProduct.documentId}`}
                        className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group/link"
                      >
                        View Product
                        <svg
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
