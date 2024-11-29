import jwt from 'jsonwebtoken';


export const checkUser = (req, res, next) => {
  const token = req.headers.authorization;

  const decode = jwt.decode(token, 'secret');
  console.log(decode);

  return res.status(200).json({ message: 'hello jeee' });
}