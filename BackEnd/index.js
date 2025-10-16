import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from './routes/formRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user',router);



const port = process.env.PORT || 4080;

app.listen(port,()=>{
    console.log("server:http://localhost:"+port);
})