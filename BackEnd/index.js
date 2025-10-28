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
// Allow local frontend (3000/3001) and support credentials
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin like mobile apps or curl
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
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