import express from 'express';
import {getJokes} from "../controllers/index.js"
import {auth} from "../middlewares/index.js"

const router = express.Router();

router.get('/jokes', auth, getJokes)

export default router;
