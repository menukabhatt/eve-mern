




export const getAllProducts = (req, res) => {
  return res.status(200).json({ message: 'hello jeee' });
}

export const addProduct = (req, res) => {
  console.log(req.body);
  return res.status(200).json({ message: 'hello jeee' });
}