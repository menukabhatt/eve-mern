import User from "../model/User.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
  const { email, password } = req.body;

  try {
    const isExist = await User.findOne({ email: email });
    if (!isExist) return res.status(401).json({ message: 'invalid credentials' });
    const pass = bcrypt.compareSync(password, isExist.password);
    if (!pass) return res.status(401).json({ message: 'invalid credentials' });

    const token = jwt.sign({
      id: isExist._id,
      isAdmin: isExist.isAdmin
    }, 'secret');
    return res.status(200).json({
      token,
      isAdmin: isExist.isAdmin
    });



  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}




