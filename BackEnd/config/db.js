import mongoose  from "mongoose";

const connectDB = async()=>{
    try{
    const test = await mongoose.connect(process.env.mongodb);
    if(test){
        console.log("MongoDB Connected");

    }

    }
    catch(error){
        console.log("DataBase Connection Error",error);

    }
}
export default connectDB;