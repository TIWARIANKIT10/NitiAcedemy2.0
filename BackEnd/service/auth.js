import jwt from "jsonwebtoken";

 export function setUser(user){
    return jwt.sign({
        email:user.email
    },process.env.secret)
    
 }

 export function verifytoken(token){
    return jwt.verify(token,process.env.secret); 
 }