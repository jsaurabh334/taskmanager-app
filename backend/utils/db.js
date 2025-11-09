import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';

export const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};