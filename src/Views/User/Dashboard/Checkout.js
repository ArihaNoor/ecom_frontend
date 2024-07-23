import React from 'react';
import Green from "../../../assets/images/green.png"
import watch from "../../../assets/images/watch.png";
import HeadPhones from "../../../assets/images/headphones.png";
import IBlack from "../../../assets/images/iphoneblack.png";
import macbook from "../../../assets/images/macbook.png"
import iRed from "../../../assets/images/iphonered.png";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
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
      imageUrl: iRed, // Replace with the actual path to the image
    },
  ];

  return (
    <div className="w-full mx-auto p-4 bg-gray-200 rounded-lg">
      <div className="flex justify-between gap-8 mb-8">
        <div className="w-2/3">
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">SHIPPING ADDRESS</h2>
            <p>John Maker</p>
            <p>123 Place Grand Street</p>
            <p>Vermont, California</p>
            <p>United States of America</p>
            <button className="mt-2 bg-gray-300 px-3 py-1 rounded">Change</button>
          </div>

          <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">PAYMENT METHOD</h2>
            <p>💳 Mastercard ending in 1252</p>
            <p>🎁 $53.21 gift card balance</p>
            <p>✅ Billing address same as Shipping Address</p>
            <button className="mt-2 bg-gray-300 px-3 py-1 rounded">Change</button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">REVIEW YOUR BAG</h2>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center bg-gray-100 p-4 mb-4 rounded-lg">
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
                    <button className="bg-gray-300 px-3 py-1 rounded">-</button>
                    <span className="mx-3">{item.quantity}</span>
                    <button className="bg-gray-300 px-3 py-1 rounded">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-1/3">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Order Summary</h2>
            <p className="flex justify-between"><span>Items:</span> <span>$5849.37</span></p>
            <p className="flex justify-between"><span>Shipping:</span> <span>$6.99</span></p>
            <p className="flex justify-between"><span>Estimated GST:</span> <span>$760.41</span></p>
            <p className="flex justify-between"><span>Gift Card:</span> <span>$0.00</span></p>
            <hr className="my-2"/>
            <p className="flex justify-between text-red-500 font-bold"><span>Order Total:</span> <span>$6609.78</span></p>
            <button className="mt-4 bg-black text-white px-3 py-2 rounded w-full">Place your order</button>
            <button className="mt-2 bg-gray-300 px-3 py-2 rounded w-full" onClick={()=>{navigate("/user/dashboard")}}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
