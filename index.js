import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = 5000;


mongoose.connect('mongodb+srv://babynshrestha76:moles900@cluster0.9rr4m.mongodb.net/EveShop').then((val) => {
  console.log('connected success');
}).catch((err) => {
  console.log(err);
});



app.use(express.json());


app.get('/', (req, res) => {

  return res.status(200).json({ message: 'hello' });
});

app.use('/api/products', productRoutes);
app.use('/api/users', authRoutes);




app.listen(port, () => {
  console.log('running and listening');
});