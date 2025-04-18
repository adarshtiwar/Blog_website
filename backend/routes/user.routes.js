import express from 'express';
const router = express.Router();
import { login, register } from '../controllers/user.controller.js';
import {Upload} from '../middlewares/muler.js';

router.post('/register',Upload.single('image'),register);
router.post('/login',login);
export default router; 