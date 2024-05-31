import express from 'express';
import { test } from '../controllers/user.controller.js';
import { signup } from '../controllers/auth.controllers.js';
import { updateUser } from '../controllers/user.controller.js';
import { deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();

router.post('/signup',signup);
router.post('/update/:id',verifyToken,updateUser);
router.delete('/delete/:id',verifyToken,deleteUser);

export default router;