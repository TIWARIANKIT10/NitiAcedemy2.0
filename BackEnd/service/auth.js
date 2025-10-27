import jwt from "jsonwebtoken";
const secret = "ankitTiwari"
 export function setUser(user){
    return jwt.sign({
        email:user.email
    },secret)
    
 }

 export function verifytoken(token){
    return jwt.verify(token,secret); 
 }