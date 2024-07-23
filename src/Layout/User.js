import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "./UserLayout";
import MainBody from "../Views/User/Dashboard/MainBody";
import ViewCart from "../Views/User/Dashboard/ViewCart";
import Checkout from "../Views/User/Dashboard/Checkout";
import ProductDescription from "../Views/User/Dashboard/ProductDescription";
import UserProfile from "../Views/User/Auth/UserProfile";

const User = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<UserLayout><MainBody /></UserLayout>}/>
      <Route path="viewcart" element={<UserLayout><ViewCart /></UserLayout>}/>
      <Route path="checkout" element={<Checkout />}/>
      <Route path="description" element={<UserLayout><ProductDescription /></UserLayout>}/>
      <Route path="userprofile" element={<UserLayout><UserProfile /></UserLayout>}/>
    </Routes>
  );
};

export default User;
