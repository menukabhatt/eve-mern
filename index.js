import express from 'express';

const app = express();
const port = 5000;


const products = [
  { id: 1, name: 'laptop', price: 50000 },
  { id: 2, name: 'phone', price: 40000 },
  { id: 3, name: 'tablet', price: 30000 }
]
app.get('/', (req, res) => {




});



app.listen(port, () => {
  console.log('running and listening');
});