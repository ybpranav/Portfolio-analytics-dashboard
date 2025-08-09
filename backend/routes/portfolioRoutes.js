import express from 'express';
import { getHoldings, getAllocation, getPerformance, getSummary } from '../controllers/portfolioController.js';

const router = express.Router();

router.get('/holdings', getHoldings);
router.get('/allocation', getAllocation);
router.get('/performance', getPerformance);
router.get('/summary', getSummary);

export default router;
