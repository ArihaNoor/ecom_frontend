import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    email: "",
    contactNumber: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  useEffect(() => {
    // Fetch user data from API or context
    // Example:
    // fetchUserData().then(data => setUser(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      address: {
        ...user.address,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit updated user data to API
    // Example:
    // updateUser(user).then(response => console.log(response));
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 h-screen overflow-y-auto flex-grow">
      <div className="w-[80%]">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="mb-4 w-full">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mb-4 w-full">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={user.contactNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4 w-full">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <div className="w-full flex items-center justify-center gap-4">
              <div className="mb-4 w-full">
                <label className="block text-gray-700">Street</label>
                <input
                  type="text"
                  name="street"
                  value={user.address.street}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={user.address.city}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>

            <div className="w-full flex justify-center items-center gap-4">
              <div className="mb-4 w-full">
                <label className="block text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={user.address.state}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={user.address.zipCode}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <label className="block text-gray-700 mt-2">Country</label>
            <input
              type="text"
              name="country"
              value={user.address.country}
              onChange={handleAddressChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
