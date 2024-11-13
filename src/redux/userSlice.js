import { createSlice } from "@reduxjs/toolkit";







export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: []
  },
  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
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

