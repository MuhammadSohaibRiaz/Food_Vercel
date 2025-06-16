import Link from "next/link"
import Image from "next/image"
import Header from "../components/Header"
import FloatingTestimonial from "../components/FloatingTestimonials"

export default function Home() {
  return (
    <>
      <Header />
      <FloatingTestimonial />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
        {/* Hero Section with Video Background */}
        <div className="relative h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1689151128603-4828c1c2838f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9hZGVkJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              {/* Fallback image for browsers that don't support video */}
              <Image
                src="https://images.unsplash.com/photo-1689151128603-4828c1c2838f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9hZGVkJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D"
                alt="Hero background"
                fill
                className="object-cover"
                priority
              />
            </video>
          </div>

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-slate-900/40 to-emerald-900/60"></div>

          <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
            <div className="max-w-5xl">
              <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-emerald-200 mb-8 leading-tight drop-shadow-2xl">
                Discover Our Premium Food
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                Explore our curated selection of high-quality, mouth-watering food made to satisfy every craving and
                elevate your dining experience.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:from-purple-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 border border-white/20 backdrop-blur-sm"
              >
                Order Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-white relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Quality Assured</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every food item is thoughtfully sourced and rigorously quality-checked to ensure freshness, flavor,
                  and your complete satisfaction.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Fast Delivery</h3>
                <p className="text-slate-600 leading-relaxed">
                  Reliable and speedy delivery so you can enjoy your favorite foods at peak freshness—right at your
                  doorstep.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Easy Order</h3>
                <p className="text-slate-600 leading-relaxed">
                  A smooth and secure shopping experience, making it simple to find and order the foods you love.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Products Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-emerald-50 relative overflow-hidden">
          {/* Decorative Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="container mx-auto px-4 relative">
            <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">
              Most Ordered Food
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Product Card 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Product 1"
                    width={400}
                    height={300}
                    className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Spicy Chicken Wrap</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    A bold new addition! Packed with tender chicken, crisp veggies, and a spicy signature sauce —
                    freshly rolled to perfection.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                  >
                    View More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Product Card 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1689151128603-4828c1c2838f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9hZGVkJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D"
                    alt="Product 2"
                    width={400}
                    height={300}
                    className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Classic Beef Burger</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {" "}
                    Juicy grilled beef patty layered with fresh lettuce, tomato, cheese, and our house-made sauce — a
                    timeless favorite.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                  >
                    View More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Product Card 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1641244972679-f8e9bc220ed7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvYWRlZCUyMGZyaWVzfGVufDB8fDB8fHww"
                    alt="Product 3"
                    width={400}
                    height={300}
                    className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Cheesy Bacon Loaded Fries</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Golden fries smothered in melted cheese, crispy bacon bits, and a drizzle of creamy ranch — the
                    ultimate indulgence.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                  >
                    View More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-lg p-10 text-center border border-purple-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-slate-700 italic mb-6 text-lg leading-relaxed">
                "The Spicy Chicken Wrap was incredible — fresh, flavorful, and delivered hot! I'm already craving my
                next order."
              </p>
              <span className="font-bold text-purple-600 text-lg">— Sarah M.</span>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-lg p-10 text-center border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-slate-700 italic mb-6 text-lg leading-relaxed">
                "Super fast delivery and the burger was juicy, flavorful, and just perfect. You've got a regular
                customer in me!"
              </p>
              <span className="font-bold text-emerald-600 text-lg">— James L.</span>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-lg p-10 text-center border border-amber-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-slate-700 italic mb-6 text-lg leading-relaxed">
                "Those loaded fries? Insanely good. Crispy, cheesy, and full of flavor. I can't stop recommending them
                to friends."
              </p>
              <span className="font-bold text-amber-600 text-lg">— Priya S.</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16 mt-10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">
            <div className="mb-8 md:mb-0">
              <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                DR SAUCY
              </span>
              <p className="text-slate-300 mt-3 text-lg">
                &copy; {new Date().getFullYear()} DR SAUCY. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-10 text-lg">
              <Link href="/" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link href="/products" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                Products
              </Link>
              <a href="#" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                Contact
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors duration-300 font-medium">
                About
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
