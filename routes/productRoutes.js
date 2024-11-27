import express from 'express';
import { addProduct, getAllProducts } from '../controllers/productController.js';

const router = express.Router();






router.route('/').get(getAllProducts).post(addProduct);



router.route('/:id').get().patch().delete();


export default router;