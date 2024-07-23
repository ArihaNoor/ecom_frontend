import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("admin/login", async (data, { rejectWithValue }) => {
    try {
        const response = await fetch(`http://127.0.0.1:4000/admin/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (response.ok) {
            return responseData;
        } else {
            return rejectWithValue(responseData);
        }
    } catch (error) {
        return rejectWithValue(error.message || 'An error occurred');
    }
});