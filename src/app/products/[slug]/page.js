'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/products?filters[documentId][$eq]=${params.slug}&populate=*`);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setProduct(data.data[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Product not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Products
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {product.Image && (
            <div className="md:w-1/2 relative h-96">
              <Image
                src={`http://localhost:1337${product.Image.url}`}
                alt={product.Name}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.Name}</h1>
            <p className="text-2xl font-bold text-blue-600 mb-6">
              ${product.Price}
            </p>
            <div className="prose max-w-none">
              {product.Description.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.children.map((child, childIndex) => (
                    <span key={childIndex}>{child.text}</span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
