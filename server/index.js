import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import UserRoutes from './routes/UserRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB')).catch((e) => console.error(e));

app.use('/api/user', UserRoutes);

const PORT = process.env.PORT;

app.listen(PORT, (e) => {
    if (e) console.error(e);
    console.log(`Server running on port ${PORT}`);
});