import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Login from "../Views/Admin/Auth/Login";
import Dashboard from "../Views/Admin/Dashboard/Dashboard";

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
    </Routes>
  );
};

export default Admin;
