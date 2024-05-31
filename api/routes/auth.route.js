import express from 'express';
import { signup } from '../controllers/auth.controllers.js';
import { signin,google,signOut } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/google",google);
router.get('/signout', signOut)

export default router;