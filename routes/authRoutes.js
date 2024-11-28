import express from 'express';
import { registerUser } from '../controllers/authController.js';
import Joi from 'joi';
import validator from 'express-joi-validation';

const validate = validator.createValidator({});

const router = express.Router();

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(20).required(),
  username: Joi.string().min(4).required(),
  shippingAddress: Joi.string().required()
});


router.route('/login').post();
router.route('/register').post(validate.body(registerSchema), registerUser);

export default router;

