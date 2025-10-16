import mongoose from "mongoose";

const fromSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    interest:{
        type:String,
        require:true
    },
    createdAt: { type: Date, default: Date.now }
})
const user = mongoose.model("Form",fromSchema);
export default user;