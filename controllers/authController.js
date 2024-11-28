import User from "../model/User.js"
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {

  const { email, username, shippingAddress, password } = req.body;

  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.status(409).json({ message: 'email already exist' });

    const hash = bcrypt.hashSync(password, 10);
    await User.create({
      email,
      username,
      shippingAddress,
      password: hash
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



