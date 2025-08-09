import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON once
const dataPath = path.join(__dirname, '../data/portfolioData.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

export const getHoldings = (req, res) => {
  res.json(data.holdings);
};

export const getAllocation = (req, res) => {
  res.json(data.allocation);
};

export const getPerformance = (req, res) => {
  res.json(data.performance);
};

export const getSummary = (req, res) => {
  res.json(data.summary);
};
