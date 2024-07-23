import React from 'react';
import Green from "../../../assets/images/green.png"
import watch from "../../../assets/images/watch.png";
import HeadPhones from "../../../assets/images/headphones.png";
import IBlack from "../../../assets/images/iphoneblack.png";
import macbook from "../../../assets/images/macbook.png"
import iRed from "../../../assets/images/iphonered.png";
import { useNavigate } from 'react-router-dom';

const bagItems = [
  { id: 1, image: macbook },
  { id: 2, image: IBlack },
  { id: 3, image: iRed },
  { id: 4, image: Green },
];

const SideBag = () => {
  const navigate = useNavigate();
  return (
    <div className="w-64 bg-gray-200 p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Your Items</h2>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        {bagItems.map((item) => (
          <div key={item.id} className="bg-white p-2 rounded-lg shadow-md">
            <img src={item.image} alt="Bag item" className="w-16 h-16 object-cover"/>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate("/user/checkout")}} className="mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 focus:outline-none">
        <i className="fa-solid fa-eye mr-2"></i>View Bag
      </button>
    </div>
  );
}

export default SideBag;
