// routes/auth.routes.js
import express from 'express';

import { crearUsuraio, loguearse } from '../controller/user.controller.js';

const router = express.Router();

router.post('/register', crearUsuraio);
router.post('/login', loguearse);



export default router;
