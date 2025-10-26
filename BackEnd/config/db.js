import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB;
        if (!uri) {
            throw new Error("MONGODB connection string is not defined in environment variables");
        }

        await mongoose.connect(uri);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Database Connection Error:", error.message || error);
        // rethrow so the caller can decide what to do (or the process will crash)
        throw error;
    }
};

export default connectDB;