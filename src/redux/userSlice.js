import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUserToLocal } from "../hooks/local";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUserFromLocal()
  },
  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
      setUserToLocal(state.users);
    },
    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      })
    },




  }
});


export const { addUser, removeUser, updateUser } = userSlice.actions;

