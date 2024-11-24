import express, { query } from 'express';

const app = express();
const port = 5000;


const products = [
  { id: 1, title: 'product 1' },
  { id: 2, title: 'product 2' },

];
app.get('/', (req, res) => {

  const { id } = req.query;
  const product = products.find((product) => product.id === Number(id));
  return res.status(200).json(product);

});

app.get('/products', (req, res) => {
  return res.status(200).json(products);
})



app.listen(port, () => {
  console.log('running and listening');
});