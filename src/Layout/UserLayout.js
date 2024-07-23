import React from 'react';
import Sidebar from '../components/Sidebar';
import SideBag from '../Views/User/Dashboard/SideBag';

const UserLayout = ({ children }) => {
  return (
    <div className='bg-gray-200 flex'>
      <Sidebar />
      <div className="flex w-full">
        {children}
      </div>
      <SideBag />
    </div>
  );
}

export default UserLayout;
