import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const handleAdminLogin = () => {
    console.log("Button")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-200 text-black p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full p-2 bg-white border  rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              required
              className="w-full p-2 bg-white border  rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your password"
            />
          </div>
          <button 
            onClick={handleAdminLogin}
            className="w-full p-2 bg-black  rounded text-white font-bold focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
