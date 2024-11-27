import User from "../model/User.js"


export const registerUser = async (req, res) => {
  const { email, username, shippingAddress, password } = req.body;

  try {
    await User.create({
      email,
      username,
      shippingAddress,
      password
    });
    return res.status(201).json({ message: 'successfully registered' });

  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}



export const loginUser = async (req, res) => {
  try {

  } catch (err) {

  }
}



