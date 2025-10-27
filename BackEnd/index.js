import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from './routes/formRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:3000", // frontend origin
  credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/user',router);

app.get("/",(req,res)=>{
    res.send("Hellow World");
})

const port = process.env.PORT || 4080;

app.listen(port,()=>{
    console.log("server:http://localhost:"+port);
})