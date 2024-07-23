import React from 'react';
import watch from "../../../assets/images/watch.png";
import { useNavigate } from 'react-router-dom';

const ProductDescription = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 h-screen overflow-y-auto flex-grow">
     <div className='w-[90%]'>
     <button onClick={()=>{navigate("/user/dashboard")}} className="text-gray-700 mb-4 border-2 border-black rounded-lg px-2">← Back</button>
      <div className="flex mb-8">
        <div className="w-1/3 flex flex-col items-center">
          <img src={watch} alt="Apple Watch" className="w-48 h-48 object-cover mb-4 bg-white rounded-lg" />
          <div className="flex items-center justify-center gap-2 space-y-2">
            <img src={watch}  alt="Apple Watch 1" className="w-16 h-16 object-cover bg-white rounded-lg" />
            <img src={watch}  alt="Apple Watch 2" className="w-16 h-16 object-cover bg-white rounded-lg" />
            <img src={watch}  alt="Apple Watch 3" className="w-16 h-16 object-cover bg-white rounded-lg" />
          </div>
        </div>
        <div className="w-2/3 pl-8">
          <h2 className="text-3xl font-bold">Apple Watch</h2>
          <h3 className="text-xl text-gray-500">Series 5 SE</h3>
          <div className="flex items-center my-2">
            <div className="text-green-500">⭐⭐⭐⭐⭐</div>
            <span className="ml-2 text-gray-500">4.5 / 5</span>
          </div>
          <p className="text-2xl font-bold mb-2">$529.99</p>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet.
            Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded">Add to Bag</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Description</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra.
          Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus.
          Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed
          sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.
        </p>
        <p className="text-gray-700 mt-4">
          Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada.
          Aenean nisl, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.
          Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare.
          Tristique volutpat facilisis in ut proin. Est vitae facilisis sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at.
          Integer morbi viverra hendrerit risus.
        </p>
        <p className="text-gray-700 mt-4">
          Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit.
          In eget ut ac facilisi leo viverra. Arcu ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros.
        </p>
      </div>
     </div>
    </div>
  );
};

export default ProductDescription;
