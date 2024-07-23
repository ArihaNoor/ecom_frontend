import React from 'react';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className='bg-gray-200 flex'>
      <AdminSidebar />
      <div className="flex w-full">
        {children}
      </div>
    </div>
  ); 
}

export default AdminLayout;
