import React from 'react';
import Section from '../components/Section';

const products = [
  {
    id: 1,
    name: 'Product One',
    description: 'This is a description for product one.',
    price: '$49/month',
  },
  {
    id: 2,
    name: 'Product Two',
    description: 'This is a description for product two.',
    price: '$99/month',
  },
  {
    id: 3,
    name: 'Product Three',
    description: 'This is a description for product three.',
    price: '$149/month',
  },
  {
    id: 4,
    name: 'Product One',
    description: 'This is a description for product one.',
    price: '$49/month',
  },
  {
    id: 5,
    name: 'Product Two',
    description: 'This is a description for product two.',
    price: '$99/month',
  },
  {
    id: 6,
    name: 'Product Three',
    description: 'This is a description for product three.',
    price: '$149/month',
  },
];

const SaaSProducts = () => {
  return (
    
    <Section
    className="pt-[12rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="saas"
    >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 " >
      <h2 className="text-3xl font-extrabold text-white-900 text-center mb-8">
        Our SaaS Products
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="text-gray-900 font-bold text-xl">{product.price}</div>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>  
    </Section>
   
  );
};

export default SaaSProducts;
