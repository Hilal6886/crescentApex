import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ArfaSchool from "./Routs/Arfaschool";
import SaaSProducts from "./pages/Saas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contactus";
import useAdmin from "../src/utils/hooks"

const App = () => {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  useAdmin()

  const handleAuthStateChange = useCallback((user) => {
    setUser(user || {});
    setCurrentUser(user || {});
    console.log("USERRRRRRRRRRRRRRRRRRRRRRRRR", user);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);
    return () => unsubscribe(); // Clean up subscription on unmount
  }, [handleAuthStateChange]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<ArfaSchool />} />
        
        <Route path="/saas" element={<SaaSProducts />} />
           
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
