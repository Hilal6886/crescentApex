
import { useNavigate,Routes, Route,useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "././firebase";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ArfaSchool from "./Routs/Arfaschool";

const App = () => {
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || {});
      setCurrentUser(user || {})
      console.log("USERRRRRRRRRRRRRRRRRRRRRRRRR", user)
    })
  }, [])
  return (
    <>
      
        <Routes>
        <Route path="/" element={<ArfaSchool />} />
        <Route path="/signup" element={!currentUser?.emailVerified ? <Signup /> : <Navigate to='/' replace /> } />
        <Route path="/login" element={<Login />} />
        </Routes>
     
     
      

     
    </>
  );
};

export default App;
