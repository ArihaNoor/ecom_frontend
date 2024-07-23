import React from 'react';
import { Link } from 'react-router-dom';

function SignupScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-200 text-black p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-8 text-center">Register YourSelf!</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 bg-white border  rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 bg-white border  rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-2 bg-white border  rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full p-2 bg-black text-white rounded font-bold focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Sign Up
          </button>
        </form>
        <p  className='mt-4'>
            Already have an account? <Link to="/"><span className='text-black font-semibold'>Login</span></Link>
        </p>
      </div>
    </div>
  );
}

export default SignupScreen;
