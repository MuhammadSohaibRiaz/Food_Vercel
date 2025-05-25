import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Discover Our Premium Collection
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow">
              Explore our curated selection of high-quality products designed to enhance your lifestyle
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
              <p className="text-gray-600">Every product is carefully selected and quality-checked for your satisfaction.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to get your products to you as soon as possible.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Shopping</h3>
              <p className="text-gray-600">Simple and secure checkout process for a hassle-free shopping experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Trending Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <Image src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400" alt="Product 1" width={400} height={300} className="object-cover w-full h-56" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Elegant Chair</h3>
                <p className="text-gray-600 mb-4">Modern design, perfect for your living room or office.</p>
                <Link href="/products" className="text-blue-600 font-semibold hover:underline">View Product</Link>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400" alt="Product 2" width={400} height={300} className="object-cover w-full h-56" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Minimalist Lamp</h3>
                <p className="text-gray-600 mb-4">Brighten up your space with this stylish lamp.</p>
                <Link href="/products" className="text-blue-600 font-semibold hover:underline">View Product</Link>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=400" alt="Product 3" width={400} height={300} className="object-cover w-full h-56" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cozy Sofa</h3>
                <p className="text-gray-600 mb-4">Relax in comfort with our best-selling sofa.</p>
                <Link href="/products" className="text-blue-600 font-semibold hover:underline">View Product</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Image src="https://randomuser.me/api/portraits/women/68.jpg" alt="Customer 1" width={80} height={80} className="rounded-full mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">"Absolutely love the quality and design. Fast delivery and great customer service!"</p>
              <span className="font-semibold text-blue-600">— Sarah M.</span>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer 2" width={80} height={80} className="rounded-full mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">“The shopping experience was seamless and the products exceeded my expectations.”</p>
              <span className="font-semibold text-blue-600">— James L.</span>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer 3" width={80} height={80} className="rounded-full mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">“I keep coming back for more. The variety and quality are unmatched!”</p>
              <span className="font-semibold text-blue-600">— Priya S.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold tracking-tight">ShopEase</span>
            <p className="text-gray-300 mt-2">&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/products" className="hover:underline">Products</Link>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">About</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
