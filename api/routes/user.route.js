import express from 'express';
import { test } from '../controllers/user.controller.js';
import { signup } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/test',test);

export default router;