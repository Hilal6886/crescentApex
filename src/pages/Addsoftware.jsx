import React, { useState } from 'react';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSoftware = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProductChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;
    setProducts(updatedProducts);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: '', image: '', demoUrl: '', description: '', features: '' }]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const categoryDocRef = await addDoc(collection(db, 'categories'), { name: category });
      
      const productDocs = [];

      for (const product of products) {
        if (!product.name || !product.demoUrl || !product.description || !product.features) {
          toast.error('All product fields are mandatory to fill');
          setIsSubmitting(false);
          return;
        }

        const productDocRef = await addDoc(collection(db, 'products'), {
          ...product,
          category: categoryDocRef.id,
        });

        productDocs.push(productDocRef);
      }

      await updateDoc(categoryDocRef, { products: productDocs.map(doc => doc.id) });

      toast.success('Category and products saved successfully');
      setCategory('');
      setProducts([]);
    } catch (error) {
      toast.error('Error adding document');
      console.error('Error adding document: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const uploadImageAndSubmit = async () => {
    if (!file) {
      await handleSubmit({ preventDefault: () => {} });  // Pass a mock event object
      return;
    }

    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        toast.error('Image upload failed');
        console.log(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        products.forEach(product => {
          if (product.image === '') {
            product.image = downloadUrl;
          }
        });

        await handleSubmit({ preventDefault: () => {} });  // Pass a mock event object
      }
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Category and Products</h1>
      <form onSubmit={e => { e.preventDefault(); uploadImageAndSubmit(); }} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Category Name:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Category Name"
            value={category}
            onChange={handleCategoryChange}
            required
          />
        </div>

        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Product {index + 1}</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Product Name:</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                value={product.name}
                onChange={(e) => handleProductChange(e, index)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Product Image:</label>
              <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleFileChange}
              />
              {file && (
                <div className="mt-2 text-sm text-gray-600">
                  Upload Progress: {progress.toFixed(2)}%
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Demo URL:</label>
              <input
                type="url"
                name="demoUrl"
                className="w-full p-2 border border-gray-300 rounded"
                value={product.demoUrl}
                onChange={(e) => handleProductChange(e, index)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Product Description:</label>
              <textarea
                name="description"
                className="w-full p-2 border border-gray-300 rounded"
                value={product.description}
                onChange={(e) => handleProductChange(e, index)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Product Features:</label>
              <textarea
  name="features"
  className="w-full p-2 border border-gray-300 rounded"
  value={product.features}
  onChange={(e) => handleProductChange(e, index)}
  required
/>

            </div>

            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleRemoveProduct(index)}
            >
              Remove Product
            </button>
          </div>
        ))}

        <div className="flex gap-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddProduct}
          >
            Add Product
          </button>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddSoftware;
