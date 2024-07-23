import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const data = [
    { name: 'Jan', Profit: 4000, Loss: 2400 },
    { name: 'Feb', Profit: 3000, Loss: 1398 },
    { name: 'Mar', Profit: 2000, Loss: 9800 },
    { name: 'Apr', Profit: 2780, Loss: 3908 },
    { name: 'May', Profit: 1890, Loss: 4800 },
    { name: 'Jun', Profit: 2390, Loss: 3800 },
    { name: 'Jul', Profit: 3490, Loss: 4300 },
    { name: 'Aug', Profit: 4000, Loss: 2400 },
    { name: 'Sep', Profit: 3000, Loss: 1398 },
  ];

  const latestOrders = [
    { product: 'Iphone 13 Pro', orderId: '#11232', date: 'Jun 29, 2022', customerName: 'Afaq Karim', status: 'Delivered', amount: '$400.00' },
    { product: 'Macbook Pro', orderId: '#11232', date: 'Jun 29, 2022', customerName: 'Afaq Karim', status: 'Pending', amount: '$288.00' },
    { product: 'Apple Watch', orderId: '#11232', date: 'Jun 29, 2022', customerName: 'Afaq Karim', status: 'Canceled', amount: '$500.00' },
    { product: 'Microsoft Book', orderId: '#11232', date: 'Jun 29, 2022', customerName: 'Afaq Karim', status: 'Delivered', amount: '$100.00' },
    { product: 'Apple Pen', orderId: '#11232', date: 'Jun 29, 2022', customerName: 'Afaq Karim', status: 'Delivered', amount: '$60.00' },
    { product: 'Airpods', orderId: '#11232', date: 'Jun 29, 2022', customerName: 'Afaq Karim', status: 'Delivered', amount: '$80.00' },
  ];

  return (
    <div className="flex flex-col p-4 bg-gray-100 h-screen overflow-y-auto flex-grow">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md min-w-[250px]">
          <h2 className="text-xl font-semibold">Today's Sales</h2>
          <p className="text-3xl font-bold">$20.4K</p>
          <p className="text-gray-500">We have sold 123 items</p>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md min-w-[250px]">
          <h2 className="text-xl font-semibold">Today's Revenue</h2>
          <p className="text-3xl font-bold">$8.2K</p>
          <p className="text-gray-500">Available to payout</p>
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md min-w-[250px]">
          <h2 className="text-xl font-semibold">In Escrow</h2>
          <p className="text-3xl font-bold">$18.2K</p>
          <p className="text-gray-500">Available to payout</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-3xl font-bold">$50.4K</p>
          <p className="text-green-500">↑ 5% than last month</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Profit" fill="#8884d8" />
            <Bar dataKey="Loss" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md md:flex-[2] min-w-[250px]">
          <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Products</th>
                <th className="py-2">Order ID</th>
                <th className="py-2">Date</th>
                <th className="py-2">Customer name</th>
                <th className="py-2">Status</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {latestOrders.map((order, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{order.product}</td>
                  <td className="py-2">{order.orderId}</td>
                  <td className="py-2">{order.date}</td>
                  <td className="py-2">{order.customerName}</td>
                  <td className="py-2">{order.status}</td>
                  <td className="py-2">{order.amount}</td>
                  <td className="py-2">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow-md min-w-[250px]">
          <h2 className="text-xl font-semibold mb-4">Most Sold Items</h2>
          <div className="mb-2">
            <p>Jeans <span className="float-right">70%</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="mb-2">
            <p>Shirts <span className="float-right">40%</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          <div className="mb-2">
            <p>Belts <span className="float-right">60%</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="mb-2">
            <p>Caps <span className="float-right">80%</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-2">
            <p>Others <span className="float-right">20%</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
