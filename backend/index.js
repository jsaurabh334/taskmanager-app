import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';  


// Load environment variables from .env file
dotenv.config();

await connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.Front_URL || 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true, // Allow cookies to be sent
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    
}));
app.use(express.json());



// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});