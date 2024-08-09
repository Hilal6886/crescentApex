import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../srevices/TourService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from '../components/Section';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const { id: productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(productId);
            setProduct(product);
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div className="p-6">Loading...</div>;
    }

    const featuresList = product.features ? product.features.split(',') : [];

    return (
        <Section className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="s">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
                {/* Image and Description Section */}
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="lg:w-1/2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        <h1 className="text-4xl font-extrabold  mb-4">{product.name}</h1>
                        <p className="text-lg text-n-3 mb-6">{product.description}</p>
                    </div>
                </div>

                {/* Features and Form Section */}
                <div className="mt-12 flex flex-col lg:flex-row lg:space-x-12">
                    {/* Features */}
                    <div className="lg:w-1/2 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold  mb-6">Features</h2>
                        <ul className="list-disc pl-5 text-n-3 space-y-2">
                            {featuresList.map((feature, index) => (
                                <li key={index} className="text-lg">{feature.trim()}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg mt-12 lg:mt-0">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Request a Quote</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                toast.success('Quote request submitted successfully!');
                            }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-lg"
                                    rows="6"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-block text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
            </div>
        </Section>
    );
};

export default ProductDetails;
