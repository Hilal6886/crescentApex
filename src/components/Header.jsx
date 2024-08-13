import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase";
import { FaCaretDown } from "react-icons/fa";
import userAvatar from './../assets/avatar.png';
import Button from "./Button";
import { brainwave } from "../assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Delay for closing dropdown
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [AdminTimeout, setAdminTimeout] = useState(null);
  const [view, setView] = useState('main'); // 'main', 'more', 'admin'

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

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("USER");
        window.location.reload();
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAdmin = () => {
    setIsAdminOpen(!isAdminOpen);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownTimeout(setTimeout(() => setIsDropdownOpen(false), 200)); // Delay for better UX
  };
  const handleAdminMouseEnter = () => {
    if (AdminTimeout) clearTimeout(AdminTimeout);
    setIsAdminOpen(true);
  };

  const handleAdminMouseLeave = () => {
    setAdminTimeout(setTimeout(() => setIsAdminOpen(false), 200)); // Delay for better UX
  };

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Solutions", to: "/solutions" },
    { name: "Blog", to: "/blog" },
    { name: "Contact Us", to: "/contact" },
    { name: "Support", to: "/support" },
  ];

  const dropdownItems = [
    { name: "Services", to: "/services" },

    { name: "Case Studies", to: "/case-studies" },
    { name: "Portfolio", to: "/portfolio" },
    
    { name: "Resources", to: "/resources" },
    { name: "Events", to: "/events" },
    { name: "Careers", to: "/careers" },
  ];

  const adminItems = [
    { name: "Add Software", to: "/addsoftware" },
    { name: "Add Blog", to: "/arfa/addblog" },
    { name: "Add Gallery", to: "/arfa/uplodeimges" },
    { name: "Admission Data", to: "/arfa/admissiondata" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-n-8 border-b border-gray-800">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3 text-white">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>
        </Link>

        <div className="md:hidden flex items-center">
          <button
            className="text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-white">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="block relative font-code text-sm uppercase text-white transition-colors hover:text-yellow-400"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li
            className="relative group"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button
              type="button"
              className="text-white text-sm font-code uppercase flex items-center hover:text-yellow-400"
              onClick={toggleDropdown}
            >
              More <FaCaretDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-56 bg-n-8 text-white rounded shadow-lg">
                {dropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-sm font-code hover:bg-gray-800 uppercase"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {isAdmin && (
            <li
              className="relative group"
              onMouseEnter={handleAdminMouseEnter}
              onMouseLeave={handleAdminMouseLeave}
            >
              <button
                type="button"
                className="text-white text-sm font-code uppercase flex items-center hover:text-yellow-400"
                onClick={toggleAdmin}
              >
                Admin <FaCaretDown className="ml-2" />
              </button>
              {isAdminOpen && (
                <div className="absolute z-10 mt-2 w-56 bg-n-8 text-white rounded shadow-lg">
                  {adminItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 text-sm font-code hover:bg-gray-800 uppercase"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          )}
        </ul>

        <div className="hidden md:block">
          {currentUser ? (
            <Button onClick={logout}>Sign Out</Button>
          ) : (
            <Link to="/login">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile nav */}
<div
  className={`fixed top-0 left-0 h-screen w-3/4 bg-n-8 text-white border-r border-gray-800 overflow-y-auto transition-transform duration-300 ${open ? "transform translate-x-0" : "transform -translate-x-full"}`}
  style={{ marginTop: "4.7rem" }} // Adjust margin for mobile
>
  <ul className="flex flex-col h-full overflow-y-auto">
    <li className="flex items-center p-4 border-b border-gray-800">
      <img
        className="w-12 h-12 rounded-full mr-3"
        src={currentUser ? currentUser.photoURL : userAvatar}
        alt="user profile"
      />
      <div>
        <span className="block text-sm font-medium">{currentUser ? currentUser.displayName : "User"}</span>
        <p className="text-xs text-orange-500">Premium User</p>
      </div>
    </li>

    {view === 'main' && (
      <>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-gray-800 hover:bg-gray-800"
            >
              {item.name}
            </Link>
          </li>
        ))}

        <li className="relative border-t border-gray-800">
          <button
            type="button"
            className="w-full text-left px-6 py-4 border-b border-gray-800 hover:bg-gray-800"
            onClick={() => setView('more')}
          >
            More <FaCaretDown className="ml-2 inline-block" />
          </button>
        </li>

        {isAdmin && (
          <li className="relative border-t border-gray-800">
            <button
              type="button"
              className="w-full text-left px-6 py-4 border-b border-gray-800 hover:bg-gray-800"
              onClick={() => setView('admin')}
            >
              Admin <FaCaretDown className="ml-2 inline-block" />
            </button>
          </li>
        )}
      </>
    )}

    {view === 'more' && (
      <>
       <li className="border-t border-gray-800">
          <button
            type="button"
            className="w-full text-left px-6 py-4 border-b border-gray-800 hover:bg-gray-800"
            onClick={() => setView('main')}
          >
            Go Back
          </button>
        </li>
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-gray-800 hover:bg-gray-800"
            >
              {item.name}
            </Link>
          </li>
        ))}
       
      </>
    )}

    {view === 'admin' && (
      <>
      <li className="border-t border-gray-800">
          <button
            type="button"
            className="w-full text-left px-6 py-4 border-b border-gray-800 hover:bg-gray-800"
            onClick={() => setView('main')}
          >
            Go Back
          </button>
        </li>
        {adminItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-gray-800 hover:bg-gray-800"
            >
              {item.name}
            </Link>
          </li>
        ))}
        
      </>
    )}

    <div className="p-4">
      {currentUser ? (
        <Button onClick={logout}>Sign Out</Button>
      ) : (
        <Link to="/login">
          <Button>Sign In</Button>
        </Link>
      )}
    </div>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
