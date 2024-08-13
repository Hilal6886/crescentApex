import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../srevices/users.service";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // Wait until the loading is finished
    if (user) navigate("/"); // Navigate to home if the user is logged in
  }, [user, loading, navigate]);

  const handleLogin = async () => {
    try {
      await logInWithEmailAndPassword(email, password);
      navigate("/"); // Navigate to home after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to log in. Please check your credentials and try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-n-9 mx-[1rem] p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Welcome Back!
        </h1>
        <input
          type="email"
          className="w-full bg-gray-100 border-2 border-gray-200 rounded-md p-3 mb-4 outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
          required
        />
        <input
          type="password"
          className="w-full bg-gray-100 border-2 border-gray-200 rounded-md p-3 mb-6 outline-none focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button
          className="w-full bg-blue-500 text-white rounded-md py-3 hover:bg-blue-600 transition duration-300"
          onClick={handleLogin}
        >
          Sign In
        </button>

        <button
          className="w-full bg-blue-100 border-blue-700 flex gap-2 justify-center text-black rounded-md py-3 mt-2 hover:bg-blue-200 transition duration-300"
          onClick={async () => {
            await signInWithGoogle();
            navigate("/"); // Navigate to home after successful Google login
          }}
        >
          <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
          <span>Sign in with Google</span>
        </button>

        <div className="text-sm text-blue-500 mt-4 text-center">
          <Link to="/reset">Forgot Password?</Link>
        </div>
        <div className="text-sm mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/signup"><span className="text-blue-500">Register</span></Link>
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error.message}</p>}
      </div>
    </div>
  );
}

export default Login;
