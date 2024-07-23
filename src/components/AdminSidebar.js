import React, { useState } from 'react';

const AdminSidebar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="h-screen bg-white text-gray-900 w-[20%] flex flex-col py-6 shadow-lg">
      <div className="flex flex-col space-y-8 mt-4">
        <button
          className={`flex items-center gap-3 p-3 w-full text-left focus:outline-none hover:bg-gray-100 rounded-lg ${activeButton === 'home' ? 'text-white bg-gray-800' : ''}`}
          onClick={() => handleButtonClick('home')}
        >
          <i className="fa-solid fa-shop"></i>
          <span className="text-base">Products</span>
        </button>
        <button
          className={`flex items-center gap-3 p-3 w-full text-left focus:outline-none hover:bg-gray-100 rounded-lg ${activeButton === 'cart' ? 'text-white bg-gray-800' : ''}`}
          onClick={() => handleButtonClick('cart')}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="text-base">Your Cart</span>
        </button>
        <button
          className={`flex items-center gap-3 p-3 w-full text-left focus:outline-none hover:bg-gray-100 rounded-lg ${activeButton === 'user' ? 'text-white bg-gray-800' : ''}`}
          onClick={() => handleButtonClick('user')}
        >
          <i className="fa-solid fa-user"></i>
          <span className="text-base">Your Profile</span>
        </button>
      </div>
      <div className="mt-auto p-4">
        <button
          className={`w-full flex items-center justify-center gap-3 p-3 text-left text-white bg-red-600 hover:bg-red-700 rounded-lg focus:outline-none ${activeButton === 'logout' ? 'bg-gray-800' : ''}`}
          onClick={() => handleButtonClick('logout')}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span className="text-base">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
