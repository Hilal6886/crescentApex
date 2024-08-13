import React, { useState, useEffect } from 'react';
import { getCategories  } from '../srevices/TourService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteDoc, doc, getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import Section from '../components/Section';
import Heading from '../components/Heading';
import { auth } from "./../firebase";


const Table = () => {
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedAlphabet, setSelectedAlphabet] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          isAdmin: true // Update this based on your logic
        };
        localStorage.setItem("USER", JSON.stringify(userData));
        setCurrentUser(userData);
        setIsAdmin(userData.isAdmin);
      } else {
        localStorage.removeItem("USER");
        setCurrentUser(null);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/categories/${categoryId}`);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleAlphabetClick = (alphabet) => {
    setSelectedAlphabet(alphabet);
  };

  const handleDelete = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category and all its products?')) {
      try {
        // Delete all products associated with the selected category
        const productsQuery = query(
          collection(db, 'products'),
          where('categoryId', '==', categoryId)
        );
        const productsSnapshot = await getDocs(productsQuery);
        productsSnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });

        // Delete the selected category
        await deleteDoc(doc(db, 'categories', categoryId));
        toast.success('Category and its products deleted successfully');
        setCategories(categories.filter((category) => category.id !== categoryId));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEdit = async (categoryId) => {
    navigate(`/categories/${categoryId}`);
  };

  const filteredCategories = selectedAlphabet
    ? categories.filter((category) =>
      category.name && category.name.toLowerCase().startsWith(selectedAlphabet.toLowerCase())
    )
    : categories;

  const searchFilteredCategories = filteredCategories.filter((category) =>
    category.name && category.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <Section  className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="s">
      
<Heading className="p-5 text-sm"
  tag="Find the Perfect Software Solution"
  title="Explore tailored software solutions to meet your business needs and drive success"
/>
  
        <div className="flex justify-center lg:mb-[-10rem]  p-7">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchInput}
            onChange={handleSearchInputChange}
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
  
        <div className="overflow-x-auto lg:p-[12rem] p-5">
          <table className="w-full bg-n-8 border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="p-4 text-left text-gray-800  bg-n-7 font-medium">Category Name</th>
                {isAdmin && <th className="p-4 text-left bg-n-7 text-gray-800 font-medium">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {searchFilteredCategories.map((category) => (
                <tr key={category.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <Link
                      to={`/products/${category.id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {category.name}
                    </Link>
                  </td>
                  {isAdmin && (
                    <td className="p-4 flex space-x-3">
                      <button
                        className="text-red-600 hover:text-red-800 transition duration-150"
                        onClick={() => handleDelete(category.id)}
                      >
                        <i className="ri-delete-bin-line text-xl"></i>
                      </button>
                      <button
                        className="text-blue-600 hover:text-blue-800 transition duration-150"
                        onClick={() => handleEdit(category.id)}
                      >
                        <i className="ri-edit-box-line text-xl"></i>
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
  
};

export default Table;
