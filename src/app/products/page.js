
import Image from 'next/image';

async function getProduct(id) {
  const res = await fetch(`http://localhost:1337/api/products/${id}?populate=*`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { id } = params;
  const productData = await getProduct(id);
  const product = productData.data;

  if (!product) {
    return <div className="container mx-auto px-4 py-12 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            {product.attributes.Image.data && (
              <div className="relative h-96 w-full">
                <Image
                  src={`http://localhost:1337${product.attributes.Image.data.attributes.url}`}
                  alt={product.attributes.Name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.attributes.Name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-6">
              ${product.attributes.Price}
            </p>
            
            <div className="prose max-w-none mb-6">
              {product.attributes.Description}
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}