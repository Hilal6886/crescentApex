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

    // Split features based on new line and avoid empty ones
    const featuresList = product.features 
        ? product.features.split('\n').filter(feature => feature.trim() !== '') 
        : [];

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="s"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
                {/* Image and Title Section */}
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">{product.name}</h1>
                        <p className="text-base lg:text-lg text-n-3 mb-6">{product.description}</p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-12">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Features</h2>
                    <div className="space-y-8">
                        {featuresList.map((feature, index) => {
                            const [title, ...description] = feature.split(':');
                            return (
                                <div key={index} className="text-sm lg:text-xl text-n-3 leading-relaxed">
                                    <span className="font-bold">{(index + 1).toString().padStart(2, '0')} {title.trim()}:</span>
                                    <p className="mt-2 ml-6">{description.join(':').trim()}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="mt-16 lg:mt-24 bg-n-8 p-8  border border:n-3 rounded-lg shadow-lg">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-n-3 mb-6">Request a Quote</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            toast.success('Quote request submitted successfully!');
                        }}
                        className="space-y-6"
                    >
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-4 bg-n-8 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full p-4 bg-n-8 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm lg:text-base font-medium text-gray-700">Message</label>
                            <textarea
                                className="mt-1 block w-full p-4 bg-n-8 border border-gray-300 rounded-lg"
                                rows="6"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-block text-white w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
            </div>
        </Section>
    );
};

export default ProductDetails;
