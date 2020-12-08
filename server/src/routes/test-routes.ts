import express from 'express';
import {respondTest} from '../controllers/test-controller';

const testRouter = express.Router();

testRouter.get(
	'/',
	respondTest
);

export default testRouter