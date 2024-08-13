import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBlog, FaImage, FaDatabase, FaBars, FaTimes } from "react-icons/fa";
import { brainwave } from "../assets"; // Add your logo here

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const adminItems = [
    { name: "Dashboard", to: "/dashboard", icon: FaHome },
    { name: "Add Software", to: "/addsoftware", icon: FaDatabase },
    { name: "Add Blog", to: "/arfa/addblog", icon: FaBlog },
    { name: "Add Gallery", to: "/arfa/uplodeimges", icon: FaImage },
    { name: "Admission Data", to: "/arfa/admissiondata", icon: FaDatabase },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-n-8 text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0 w-64" : "translate-x-[-40px] w-16" // Partially visible when closed
      }`}
      style={{ overflow: 'hidden' }} // Ensure content doesn't overflow
    >
      <div className="flex items-center justify-between p-4">
        <img src={brainwave} alt="Logo" className={`w-32 h-auto ${isOpen ? "block" : "hidden"}`} />
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      <ul className="space-y-2">
        {adminItems.map((item, index) => (
          <li key={index} className="py-3">
            <Link
              to={item.to}
              className={`flex items-center text-gray-300 hover:bg-gray-700 rounded-md ${
                isOpen ? "px-4 text-sm" : "px-2 text-xs"
              }`}
            >
              <item.icon className="mr-3 w-5 h-5 text-gray-400" />
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
