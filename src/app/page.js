"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Utility function to extract plain text from rich-text description
function getPlainTextFromDescription(description) {
  if (!Array.isArray(description)) return '';
  return description
    .map(paragraph => paragraph.children?.map(child => child.text).join(' ') ?? '')
    .join(' ')
    .trim();
}

function getUniqueCategories(products) {
  return [...new Set(products.map(p => p.Name))];
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/products?populate=*');
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <ClientFilteredProducts products={products} />
  );
}

function ClientFilteredProducts({ products }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/categories');
        const data = await response.json();
        setCategories(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (!selectedCategory) {
        setFilteredProducts(products);
        return;
      }

      try {
        const response = await fetch(`http://localhost:1337/api/products?filters[category][documentId][$eq]=${selectedCategory}&populate=*`);
        const data = await response.json();
        setFilteredProducts(data.data);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchProductsByCategory();
  }, [selectedCategory, products]);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded ${
              selectedCategory === category.documentId
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => setSelectedCategory(category.documentId)}
          >
            {category.Name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {product.Image && (
                <div className="relative w-full h-48">
                  <Image
                    src={`http://localhost:1337${product.Image.url}`}
                    alt={product.Name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.Name}</h2>
                <p className="text-gray-600 mb-4">
                  {product.Description[0]?.children[0]?.text || 'No description available'}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    ${product.Price}
                  </span>
                  <Link 
                    href={`/products/${product.documentId}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}