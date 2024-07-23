import React from 'react';
import Green from "../../../assets/images/green.png"
import watch from "../../../assets/images/watch.png";
import HeadPhones from "../../../assets/images/headphones.png";
import IBlack from "../../../assets/images/iphoneblack.png";
import macbook from "../../../assets/images/macbook.png"
import iRed from "../../../assets/images/iphonered.png";

const ViewCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Dell XPS 13',
      color: 'White',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      rating: 4.5,
      price: 1799.99,
      quantity: 1,
      imageUrl: macbook, // Replace with the actual path to the image
    },
    {
      id: 2,
      name: 'Iphone 11',
      color: 'Navy Blue',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      rating: 4.5,
      price: 729.99,
      quantity: 3,
      imageUrl: IBlack, // Replace with the actual path to the image
    },
    {
      id: 3,
      name: 'Iphone 11',
      color: 'Milky White',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      rating: 4.5,
      price: 619.99,
      quantity: 1,
      imageUrl: Green, // Replace with the actual path to the image
    },
  ];

  return (
    <div className="w-[90%] mx-auto p-4 bg-gray-200 rounded-lg h-screen overflow-y-auto flex-grow flex-col flex">
      <h2 className="text-2xl font-bold mb-4">Check your Bag Items</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center bg-white p-4 mb-4 rounded-lg shadow-md">
          <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover mr-4" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-500">{item.color}</p>
            <p className="text-gray-600">{item.description}</p>
            <div className="flex items-center mt-2">
              <div className="text-green-500">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-gray-500">{item.rating} / 5</span>
            </div>
            <p className="text-lg font-bold mt-2">${item.price.toFixed(2)} x {item.quantity}</p>
            <div className="flex items-center mt-2">
              <button className="bg-gray-200 px-3 py-1 rounded">-</button>
              <span className="mx-3">{item.quantity}</span>
              <button className="bg-gray-200 px-3 py-1 rounded">+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewCart;
