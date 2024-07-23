import React from 'react';
import { useNavigate } from 'react-router-dom';
import Green from "../../../assets/images/green.png"
import watch from "../../../assets/images/watch.png";
import HeadPhones from "../../../assets/images/headphones.png";
import IBlack from "../../../assets/images/iphoneblack.png";
import macbook from "../../../assets/images/macbook.png"
import iRed from "../../../assets/images/iphonered.png";


const products = [
  { name: 'Apple Watch', description: 'Series 5 SE', price: '$529.99', image: watch },
  { name: 'Sony ZX330BT', description: 'Light Grey', price: '$39.99', image: HeadPhones },
  { name: 'Iphone 11', description: 'Serious Black', price: '$619.99', image: IBlack },
  { name: 'Iphone 11', description: 'Subway Blue', price: '$619.99', image: IBlack },
  { name: 'Macbook Pro 16"', description: 'Silver - M1 Pro', price: '$3249.99', image: macbook },
  { name: 'Iphone 11', description: 'Product RED', price: '$619.99', image: iRed },
  { name: 'Iphone 11', description: 'Milky White', price: '$619.99', image: Green },
];


const MainBody = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 h-screen overflow-y-auto flex-grow">
      <div className="w-[90%]">
        <input 
          type="text" 
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
          className="w-full p-2 mb-4 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4 rounded-lg"/>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-semibold">{product.price}</span>
                <div className='flex gap-2'>
                <button onClick={()=>{navigate("/user/description")}} className="text-gray-500 hover:text-gray-900 focus:outline-none">
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
                <i class="fa-solid fa-cart-plus"></i>
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainBody;
