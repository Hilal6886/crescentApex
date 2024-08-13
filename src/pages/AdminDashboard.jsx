import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`p-4 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
        {/* Main content goes here */}
        <h1 className="text-2xl font-bold">Admin Dashboard Content</h1>
        {/* Add your admin content here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
