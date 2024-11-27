import mongoose from "mongoose";



const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    min: [4, "too short"],
    max: [20, "too long"]
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
  },

  shippingAddress: {
    type: String,
    required: true
  },

  isAdmin: {
    type: Boolean,
    default: false
  }




});

const User = mongoose.model("User", userSchema);

export default User;



