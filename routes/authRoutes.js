import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';
import Joi from 'joi';
import validator from 'express-joi-validation';
import { checkUser } from '../middlewares/auth_check.js';

const validate = validator.createValidator({});

const router = express.Router();

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(20).required(),
});


const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(20).required(),
  username: Joi.string().min(4).required(),
  shippingAddress: Joi.string().required()
});


router.route('/login').post(checkUser, validate.body(loginSchema), loginUser);
router.route('/register').post(validate.body(registerSchema), registerUser);

export default router;

