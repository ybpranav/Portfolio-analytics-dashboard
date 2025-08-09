import express from 'express';
import cors from 'cors';
import portfolioRoutes from './routes/portfolioRoutes.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());

// Routes
app.use('/api/portfolio', portfolioRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
