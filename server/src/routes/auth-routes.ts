const express = require('express');
const { check } = require('express-validator');
const authRouter = express.Router();
import {
	login,
	refreshToken,
} from '../controllers/auth-controllers';

authRouter.post(
	'/login',
	[check('username').not().isEmpty(), check('password').not().isEmpty()],
	login,
);

authRouter.use('/refresh_token', refreshToken);

export default authRouter;