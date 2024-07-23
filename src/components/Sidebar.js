import React, { useState } from 'react';
import ExpandedSidebar from './ExpandedSidebar'; 
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="h-screen bg-white text-gray-900 w-16 flex flex-col items-center py-4">
        <button
          className={`mb-4 focus:outline-none ${activeButton === 'menu' ? 'text-white px-2 py-1 rounded-lg bg-gray-800' : ''}`}
          onClick={handleSidebarToggle}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="flex flex-col space-y-8">
          <button
            className={`focus:outline-none ${activeButton === 'home' ? 'text-white px-2 py-1 rounded-lg bg-gray-800' : ''}`}
            onMouseEnter={() => handleButtonClick('home')}
            onClick={()=>{navigate("/user/dashboard")}}
          >
            <i className="fa-solid fa-shop"></i>
          </button>
          <button
            className={`focus:outline-none ${activeButton === 'cart' ? 'text-white px-2 py-1 rounded-lg bg-gray-800' : ''}`}
            onMouseEnter={() => handleButtonClick('cart')}
            onClick={()=>{navigate("/user/viewcart")}}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button
            className={`focus:outline-none ${activeButton === 'user' ? 'text-white px-2 py-1 rounded-lg bg-gray-800' : ''}`}
            onMouseEnter={() => handleButtonClick('user')}
            onClick={()=>{navigate("/user/userprofile")}}
          >
            <i className="fa-solid fa-user"></i>
          </button>
        </div>
        <div className="mt-auto">
          <button
            className={`text-white rounded-lg px-2 py-1 bg-red-700 focus:outline-none ${activeButton === 'logout' ? 'text-white px-2 py-1 rounded-lg bg-gray-800' : ''}`}
            onMouseEnter={() => handleButtonClick('logout')}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>

      {/* Expanded Sidebar as Side Modal */}
      {sidebarVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-start">
          <ExpandedSidebar onClose={handleSidebarToggle} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
