import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:[]
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload;
            // localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout:(state)=>{
            state.user = null;
            // localStorage.removeItem('user')
    
        },
        addIncome:(state=[],action)=>{
            state.user= action.payload
            
        },
        addExpense:(state=[],action)=>{
            state.user=action.payload
        }
       
    }
})

export const {addIncome,addExpense, login, logout} = userSlice.actions;

export const selectUser = (state)=> state.user.user;

export default userSlice.reducer