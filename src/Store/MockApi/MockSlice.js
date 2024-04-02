import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const Create = createAsyncThunk('/Create/MockSlice', async(data, {rejectWithValue})=>{
    console.log("dddddddd", data);
    const response = await fetch ("https://65f7f58cb4f842e8088679a8.mockapi.io/CRUD",{
        method: "Post",
        headers:{
            "content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    try {
        const result = await response.json();
        return result;

        
    } catch (error) {
        return rejectWithValue(error)
        
    }
})
export const showUser = createAsyncThunk('/showUser/MockSlice', async()=>{
    const response = await  fetch("https://65f7f58cb4f842e8088679a8.mockapi.io/CRUD");
    console.log("respppppppppp++", response);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
        
    }
}) 





const MockSlice = createSlice({
    name:"MockSlice",
    initialState:{
        loading: false,
        users :[],
        Data :[],
        error: null

    },

    extraReducers:(builder)=>{
        builder
        // CREATE USER 
        
        .addCase(Create.pending,(state, action)=>{
            state.loading = true
        })
        .addCase(Create.fulfilled,(state, action)=>{
            state.loading = false
            state.users.push(action.payload)
        })
        .addCase(Create.rejected,(state, action)=>{
            state.loading = false
            state.error = action.payload.message

        })
            //  READ USER
            .addCase(showUser.pending,(state, action)=>{
                state.loading = true
            })
            .addCase(showUser.fulfilled,(state, action)=>{
                console.log("aaaaaaa", action);
                state.loading = false
                state.users =action.payload
            })
            .addCase(showUser.rejected,(state, action)=>{
                state.loading = false
                state.error = action.payload
    
            })
    }
})

export default MockSlice.reducer