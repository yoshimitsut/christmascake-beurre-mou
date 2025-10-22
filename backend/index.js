import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reservationRoutes from './routes/reservations.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', reservationRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend running' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});