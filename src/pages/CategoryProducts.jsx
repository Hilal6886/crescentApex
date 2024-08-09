import React, { useState, useEffect } from 'react';
import { getCategoryProducts } from '../srevices/TourService';
import { useParams, useNavigate } from 'react-router-dom';

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const { id: categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getCategoryProducts(categoryId);
      setProducts(products);
    };
    fetchProducts();
  }, [categoryId]);

  return (
    <section className="py-12 px-6 bg-n-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Products</h2>
        <p className="text-lg text-gray-600">Explore our top software solutions for your business needs.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-n-8 border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                {product.demoUrl && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-150"
                  >
                    Demo
                  </a>
                )}
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryProducts;
