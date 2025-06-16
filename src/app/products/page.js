import ProductList from "./ProductList"

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/products?populate=*`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json()
}

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/categories?populate=*`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }
  return res.json()
}

export default async function ProductsPage() {
  const [productsData, categoriesData] = await Promise.all([getProducts(), getCategories()])

  const products = productsData.data
  const categories = categoriesData.data

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
      {/* Decorative Elements - Updated with food colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
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
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-slate-800 to-red-600 animate-fade-in leading-tight">
              Our Premium Food
            </h1>

            <div
              className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8 rounded-full animate-fade-in"
              style={{ animationDelay: "100ms" }}
            ></div>

            <p
              className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light"
              style={{ animationDelay: "200ms" }}
            >
              Discover our curated collection of premium food products, crafted with attention to detail and quality.
            </p>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
              Each item is carefully selected to bring delicious flavors and exceptional taste to your table.
            </p>
          </div>

          <ProductList initialProducts={products} categories={categories} />
        </div>
      </div>
    </div>
  )
}
