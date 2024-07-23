import { configureStore } from "@reduxjs/toolkit";
import AdminSlicer from "../features/AdminSlicer"


export const store = configureStore({
  reducer: {
    admin: AdminSlicer, 
   },
  
});